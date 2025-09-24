import React, { useState } from "react";
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

  // 유효성 검사 함수
  const validate = () => {
    // 아이디: 영문소문자/숫자, 4~16자
    if (!/^[a-z0-9]{4,16}$/.test(userId)) {
      setError("아이디는 영문소문자/숫자, 4~16자로 입력해주세요.");
      return false;
    }
    // 비밀번호: 영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~16자
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
    // 휴대전화: 3칸 모두 입력
    if (!phone2.trim() || !phone3.trim()) {
      setError("휴대전화번호를 입력해주세요.");
      return false;
    }
    // 이메일: @ 포함
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
                  />
                  <button className="px-3 py-2 bg-gray-200 rounded">
                    우편번호 찾기
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="기본주소"
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="나머지주소"
                  className="w-full border rounded px-3 py-2"
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
                  </select>{" "}
                  -{" "}
                  <input
                    type="text"
                    className="border rounded px-2 py-2 w-20"
                  />{" "}
                  -{" "}
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
                  </select>{" "}
                  -{" "}
                  <input
                    type="text"
                    className="border rounded px-2 py-2 w-20"
                    value={phone2}
                    onChange={(e) => setPhone2(e.target.value)}
                  />{" "}
                  -{" "}
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
    </form>
  );
};

export default SignUp;
