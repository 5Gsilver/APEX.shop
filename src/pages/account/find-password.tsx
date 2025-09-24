import React from "react";

const FindPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-xl font-bold mb-4">비밀번호 찾기</h1>
        <p className="text-gray-600 mb-4">
          가입 시 등록한 아이디와 이메일을 입력해주세요.
        </p>
        <input
          type="text"
          placeholder="아이디"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button className="w-full bg-black text-white py-2 rounded">
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default FindPasswordPage;
