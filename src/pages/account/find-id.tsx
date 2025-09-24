import React, { useState } from "react";

const FindId: React.FC = () => {
  const [searchType, setSearchType] = useState("email"); // email | phone
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      searchType,
      name,
      emailOrPhone,
    });
    // 👉 API 호출 로직 추가
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f4f0]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        {/* Title */}
        <h1 className="text-center text-lg font-semibold tracking-widest mb-6">
          FIND ID
        </h1>

        {/* 안내문 */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          이메일 또는 휴대전화로 아이디 찾기가 가능합니다. <br />
          <br />
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이메일/휴대폰 선택 */}
          <div className="flex items-center space-x-4 text-sm">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="searchType"
                value="email"
                checked={searchType === "email"}
                onChange={(e) => setSearchType(e.target.value)}
              />
              <span>이메일</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="searchType"
                value="phone"
                checked={searchType === "phone"}
                onChange={(e) => setSearchType(e.target.value)}
              />
              <span>휴대폰번호</span>
            </label>
          </div>

          {/* 이름 */}
          <div>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-[#d4b59c]"
              required
            />
          </div>

          {/* 이메일 or 휴대폰 */}
          <div>
            <input
              type={searchType === "email" ? "email" : "tel"}
              placeholder={searchType === "email" ? "이메일" : "휴대폰번호"}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-[#d4b59c]"
              required
            />
          </div>

          {/* 버튼 */}
          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold bg-[#c8a98e] hover:bg-[#b89376] transition"
          >
            아이디 찾기
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindId;
