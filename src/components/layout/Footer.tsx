import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-400 text-sm py-6 relative">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p>
          상호명. 주식회사 APEX 대표, 윤성민 대표. 0000-0000 주소, 서울특별시
          서대문구 가좌로 134 (홍은동) APEX 2F
        </p>
        <p>
          사업자등록번호, 000-00-0000 [사업자정보확인] 통신판매업번호,
          0000-00000-0000 개인정보관리책임자, 윤성민 naruoto42@naver.com
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#">About</a>
          <a href="#">Guide</a>
          <a href="#">Agreement</a>
          <a href="#">개인정보처리방침</a>
        </div>
        <p className="text-xs">
          Copyright. 주식회사 원아이컴퍼니 all rights reserved. Designed By
          ONEDESIGN.
        </p>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col items-center space-y-3">
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-yellow-400"
        >
          <span className="text-black font-bold">TALK</span>
        </a>
        <button className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-white">
          <span className="text-gray-500">︾</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
