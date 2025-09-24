import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link로 변경

const LoginPage: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);

  const handleLogin = () => {
    console.log(
      "아이디:",
      id,
      "비밀번호:",
      password,
      "아이디저장:",
      rememberId
    );
  };

  const handleKakaoLogin = () => {
    console.log("카카오 1초 로그인/회원가입");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">APEX</h1>

      <div
        className="w-full max-w-md bg-yellow-400 text-black rounded-lg p-4 mb-6 cursor-pointer"
        onClick={handleKakaoLogin}
      >
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg font-medium">
            카카오 1초 로그인/회원가입
          </span>
        </div>
      </div>

      <p className="text-center text-sm text-gray-600 mb-6">
        1초만에 가입하고 다양한 혜택을 받아보세요!
      </p>

      <div className="w-full max-w-md p-4 rounded-lg mb-6 text-center text-gray-500">
        또는
      </div>

      <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="rememberId"
            checked={rememberId}
            onChange={(e) => setRememberId(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="rememberId" className="text-sm text-gray-600">
            아이디저장
          </label>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded mb-2"
        >
          로그인
        </button>

        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <Link to="/find-id" className="cursor-pointer hover:underline">
            아이디 찾기
          </Link>
          <Link to="/find-password" className="cursor-pointer hover:underline">
            비밀번호 찾기
          </Link>
          <Link to="/signup" className="cursor-pointer hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
