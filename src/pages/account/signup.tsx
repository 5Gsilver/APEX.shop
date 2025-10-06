import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState("010");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  // 주소 입력값 상태
  const [postcode, setPostcode] = useState("");
  const [addr1, setAddr1] = useState("");
  const [addr2, setAddr2] = useState("");

  // 우편번호 레이어 상태 및 탭
  const [showZipLayer, setShowZipLayer] = useState(false);
  const [activeTab, setActiveTab] = useState<"kakao" | "zboo">("kakao");
  const zipInputRef = useRef<HTMLInputElement>(null);
  const addr1InputRef = useRef<HTMLInputElement>(null);
  const addr2InputRef = useRef<HTMLInputElement>(null);

  // 유효성 검사 함수
  const validate = () => {
    if (!/^[a-z0-9]{4,16}$/.test(userId)) {
      setError("아이디는 영문소문자/숫자, 4~16자로 입력해주세요.");
      return false;
    }
    const pw = password;
    const pwLength = pw.length >= 8 && pw.length <= 16;
    const hasLetter = /[a-zA-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[^a-zA-Z0-9]/.test(pw);
    const typeCount = [hasLetter, hasNumber, hasSpecial].filter(Boolean).length;
    if (!pwLength || typeCount < 2) {
      setError(
        "비밀번호는 영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~16자로 입력해주세요."
      );
      return false;
    }
    if (password !== confirmPassword) {
      setError("비밀번호가 다릅니다");
      return false;
    }
    if (!name.trim()) {
      setError("이름을 입력해주세요.");
      return false;
    }
    if (!phone2.trim() || !phone3.trim()) {
      setError("휴대전화번호를 입력해주세요.");
      return false;
    }
    if (!email.includes("@")) {
      setError("이메일 형식이 올바르지 않습니다");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    alert("회원가입이 완료되었습니다!");
  };

  // 우편번호 레이어 닫기
  const handleCloseZipLayer = () => setShowZipLayer(false);

  // 카카오 우편번호 서비스 연동
  const handleOpenZipLayer = () => {
    setShowZipLayer(true);
    setActiveTab("kakao");
    setTimeout(() => {
      // @ts-ignore
      if (window.daum && window.daum.Postcode) {
        // @ts-ignore
        new window.daum.Postcode({
          oncomplete: function (data: any) {
            setPostcode(data.zonecode);
            setAddr1(data.address);
            if (zipInputRef.current) zipInputRef.current.value = data.zonecode;
            if (addr1InputRef.current)
              addr1InputRef.current.value = data.address;
            setShowZipLayer(false);
          },
          width: "100%",
          height: "100%",
        }).embed(document.getElementById("kakaoSearchLayer"));
      }
    }, 100);
  };

  // 탭 전환
  const handleTabClick = (tab: "kakao" | "zboo") => {
    setActiveTab(tab);
    if (tab === "kakao") {
      setTimeout(() => {
        // @ts-ignore
        if (window.daum && window.daum.Postcode) {
          // @ts-ignore
          new window.daum.Postcode({
            oncomplete: function (data: any) {
              setPostcode(data.zonecode);
              setAddr1(data.address);
              if (zipInputRef.current)
                zipInputRef.current.value = data.zonecode;
              if (addr1InputRef.current)
                addr1InputRef.current.value = data.address;
              setShowZipLayer(false);
            },
            width: "100%",
            height: "100%",
          }).embed(document.getElementById("kakaoSearchLayer"));
        }
      }, 100);
    }
  };

  // 카카오 우편번호 스크립트, Cafe24 CSS 동적 로드
  React.useEffect(() => {
    if (!document.getElementById("daum-postcode-script")) {
      const script = document.createElement("script");
      script.id = "daum-postcode-script";
      script.src =
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      document.body.appendChild(script);
    }
    if (!document.getElementById("cafe24-postcode-css")) {
      const link = document.createElement("link");
      link.id = "cafe24-postcode-css";
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "//img.echosting.cafe24.com/css/postcode.css";
      document.head.appendChild(link);
    }
  }, []);

  // 지번/도로명 검색 탭의 검색 버튼 클릭 핸들러 (실제 검색 기능은 구현 필요)
  const handleZbooSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    // 실제 검색 기능은 별도 API 필요, 여기서는 안내 메시지만 표시
    const panel = document.getElementById("zboo_panel_address");
    const empty = document.getElementById("zboo_panel_empty");
    if (panel && empty) {
      panel.innerHTML = `<tr><td colspan="2">검색 기능은 데모입니다.</td></tr>`;
      empty.style.display = "none";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8">
      {/* 제목 */}
      <h2 className="text-xl font-bold mb-6">회원가입</h2>

      {/* 기본정보 */}
      <div className="border p-6 rounded-lg mb-10">
        <h3 className="text-lg font-semibold mb-4">기본정보</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-t">
              <td className="py-3 w-40 font-medium">아이디 *</td>
              <td>
                <input
                  type="text"
                  placeholder="영문소문자/숫자, 4~16자"
                  className="w-full border rounded px-3 py-2"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">비밀번호 *</td>
              <td>
                <input
                  type="password"
                  placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~16자"
                  className="w-full border rounded px-3 py-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">비밀번호 확인 *</td>
              <td>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">이름 *</td>
              <td>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">주소</td>
              <td className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="우편번호"
                    className="border rounded px-3 py-2 flex-1"
                    ref={zipInputRef}
                    value={postcode}
                    readOnly
                  />
                  <button
                    type="button"
                    className="px-3 py-2 bg-gray-200 rounded"
                    onClick={handleOpenZipLayer}
                  >
                    우편번호 찾기
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="기본주소"
                  className="w-full border rounded px-3 py-2"
                  ref={addr1InputRef}
                  value={addr1}
                  readOnly
                />
                <input
                  type="text"
                  placeholder="나머지주소"
                  className="w-full border rounded px-3 py-2"
                  ref={addr2InputRef}
                  value={addr2}
                  onChange={(e) => setAddr2(e.target.value)}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">일반전화</td>
              <td>
                <div className="flex items-center gap-2">
                  <select className="border rounded px-2 py-2">
                    <option value="02">02</option>
                    <option value="031">031</option>
                    <option value="032">032</option>
                    <option value="033">033</option>
                    <option value="041">041</option>
                    <option value="042">042</option>
                    <option value="043">043</option>
                    <option value="044">044</option>
                    <option value="051">051</option>
                    <option value="052">052</option>
                    <option value="053">053</option>
                    <option value="054">054</option>
                    <option value="055">055</option>
                    <option value="061">061</option>
                    <option value="062">062</option>
                    <option value="063">063</option>
                    <option value="064">064</option>
                    <option value="0502">0502</option>
                    <option value="0503">0503</option>
                    <option value="0504">0504</option>
                    <option value="0505">0505</option>
                    <option value="0506">0506</option>
                    <option value="0507">0507</option>
                    <option value="070">070</option>
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                    <option value="0508">0508</option>
                  </select>
                  <span className="mx-1">-</span>
                  <input
                    type="text"
                    className="border rounded px-2 py-2 w-20"
                  />
                  <span className="mx-1">-</span>
                  <input
                    type="text"
                    className="border rounded px-2 py-2 w-20"
                  />
                </div>
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">휴대전화 *</td>
              <td>
                <div className="flex items-center gap-2">
                  <select
                    className="border rounded px-2 py-2"
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                  >
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                  <span className="mx-1">-</span>
                  <input
                    type="text"
                    className="border rounded px-2 py-2 w-20"
                    value={phone2}
                    onChange={(e) => setPhone2(e.target.value)}
                  />
                  <span className="mx-1">-</span>
                  <input
                    type="text"
                    className="border rounded px-2 py-2 w-20"
                    value={phone3}
                    onChange={(e) => setPhone3(e.target.value)}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  주문시 연락받을 번호를 정확히 입력해주세요.
                </p>
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">이메일 *</td>
              <td>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 추가정보 */}
      <div className="border p-6 rounded-lg mb-10">
        <h3 className="text-lg font-semibold mb-4">추가정보</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-t">
              <td className="py-3 w-40 font-medium">성별</td>
              <td>
                <label className="mr-4">
                  <input type="radio" name="gender" /> 남자
                </label>
                <label>
                  <input type="radio" name="gender" /> 여자
                </label>
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">생년월일</td>
              <td>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="년"
                    className="w-20 border rounded px-2 py-2"
                  />
                  <input
                    type="text"
                    placeholder="월"
                    className="w-16 border rounded px-2 py-2"
                  />
                  <input
                    type="text"
                    placeholder="일"
                    className="w-16 border rounded px-2 py-2"
                  />
                  <label className="ml-4">
                    <input type="radio" name="calendar" /> 양력
                  </label>
                  <label className="ml-2">
                    <input type="radio" name="calendar" /> 음력
                  </label>
                </div>
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-3 font-medium">환불계좌 정보</td>
              <td className="space-y-2">
                <div>
                  <select className="border rounded px-2 py-2">
                    <option>은행 선택</option>
                    <option>국민은행</option>
                    <option>신한은행</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="계좌번호"
                  className="w-full border rounded px-3 py-2"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 에러 메시지 */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* 버튼 */}
      <div className="flex justify-center gap-4">
        <Link to="/login" className="bg-gray-300 px-6 py-2 rounded text-center">
          취소
        </Link>
        {isValid ? (
          <Link
            to="/login"
            className="bg-black text-white px-6 py-2 rounded text-center"
          >
            가입하기
          </Link>
        ) : (
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded"
          >
            가입하기
          </button>
        )}
      </div>

      {/* 우편번호 레이어 */}
      {showZipLayer && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-[1000] flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[600px] max-w-[95vw] p-0 z-[1001] ">
            {/* 레이어 내부는 relative 유지 */}
            <div
              className="mCafe24Post gPc typeLayer relative"
              id="layerZipcode"
            >
              <h1 className="text-lg font-bold px-6 py-4 border-b">
                우편번호 검색
              </h1>
              <div className="content px-6 py-4">
                <div className="mTab typeNav eTab mb-4">
                  <ul className="flex border-b">
                    <li
                      className={
                        activeTab === "kakao"
                          ? "selected border-b-2 border-black"
                          : ""
                      }
                    >
                      <a
                        href="#"
                        id="kakao_postcode"
                        className={`inline-block px-4 py-2 ${activeTab === "kakao" ? "font-bold text-black" : "text-gray-500"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("kakao");
                        }}
                      >
                        통합 검색
                      </a>
                    </li>
                    <li
                      className={
                        activeTab === "zboo"
                          ? "selected border-b-2 border-black"
                          : ""
                      }
                    >
                      <a
                        href="#"
                        className={`inline-block px-4 py-2 ${activeTab === "zboo" ? "font-bold text-black" : "text-gray-500"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("zboo");
                        }}
                      >
                        지번/도로명 검색
                      </a>
                    </li>
                  </ul>
                </div>
                {/* 카카오 우편번호 */}
                {activeTab === "kakao" && (
                  <div
                    id="kakaoSearchLayer"
                    className="w-full"
                    style={{
                      display: "block",
                      width: "100%",
                      height: 500,
                    }}
                  ></div>
                )}
                {/* 지번/도로명 검색 */}
                {activeTab === "zboo" && (
                  <div className="search w-[560px] mx-auto">
                    <table className="w-full border mb-2">
                      <caption className="sr-only">
                        동(읍/면) + 지번 검색
                      </caption>
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            className="text-left px-2 py-1 w-32 bg-gray-50"
                          >
                            지번/도로명
                          </th>
                          <td className="px-2 py-1">
                            <input
                              type="text"
                              className="fText border rounded px-2 py-1"
                              id="zboo_keyword"
                            />
                            <a
                              href="#none"
                              id="zboo_search_btn"
                              className="btnSearch ml-2 align-middle"
                              onClick={handleZbooSearch}
                            >
                              <img
                                src="//img.echosting.cafe24.com/postcode/ko_KR/btn_postcode_search.gif"
                                alt="검색"
                                className="inline"
                              />
                            </a>
                            <p className="txtInfo text-xs text-gray-500 mt-1">
                              도로명+건물번호(예:테헤란로5) |
                              읍/면/동/리+지번(예:서린동154)
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="tabCont"
                      id="zboo_contents"
                      style={{ display: "block", height: 415 }}
                    >
                      <div className="ctrl" id="zboo_panel_sido"></div>
                      <p
                        id="similar_search_info"
                        className="txtInfo"
                        style={{
                          display: "none",
                          color: "#6292db",
                          marginLeft: 7,
                          paddingLeft: 11,
                          background:
                            "url(//img.echosting.cafe24.com/postcode/sflex_ico.png) no-repeat -443px -96px",
                        }}
                      >
                        일치하는 주소가 없어요. 입력하신 검색어와 가장 유사한
                        주소 결과를 제공해 드릴게요.
                      </p>
                      <div
                        className="addressList"
                        id="zboo_panel_search_result"
                        style={{ height: 365 }}
                      >
                        <div className="resultList">
                          <table className="w-full border">
                            <caption className="sr-only">
                              지번주소 검색결과
                            </caption>
                            <colgroup>
                              <col style={{ width: "auto" }} />
                              <col style={{ width: 60 }} />
                            </colgroup>
                            <thead>
                              <tr>
                                <th scope="col" className="bg-gray-50">
                                  상세주소
                                </th>
                                <th scope="col" className="bg-gray-50">
                                  우편번호
                                </th>
                              </tr>
                            </thead>
                            <tbody
                              id="zboo_panel_address"
                              className="center"
                            ></tbody>
                          </table>
                        </div>
                        <p
                          id="zboo_panel_empty"
                          className="empty text-center text-gray-400 py-4"
                          style={{ display: "block" }}
                        >
                          찾으실 지번주소 혹은 도로명주소를 검색해 주세요
                        </p>
                      </div>
                      <div id="zboo_paginate" className="paginate"></div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="btnClose absolute top-2 right-2"
                id={
                  activeTab === "zboo" ? "zboo_top_close_btn" : "top_close_btn"
                }
              >
                <a href="#none" onClick={handleCloseZipLayer}>
                  <img
                    src="//img.echosting.cafe24.com/postcode/btn_close.gif"
                    alt="닫기"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default SignUp;
