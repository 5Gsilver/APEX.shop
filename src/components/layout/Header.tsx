import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-8">
        {/* 로고 */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-gray-900 cursor-pointer hover:text-black transition-colors"
        >
          APEX
        </Link>

        {/* 네비게이션 */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black transition-colors">
            NEW
          </a>
          <a href="#" className="hover:text-black transition-colors">
            BEST
          </a>
          <a href="#" className="hover:text-black transition-colors">
            OUTER
          </a>
          <a href="#" className="hover:text-black transition-colors">
            TOP
          </a>
          <a href="#" className="hover:text-black transition-colors">
            BOTTOM
          </a>
          <a href="#" className="hover:text-black transition-colors">
            SHOES
          </a>
          <a href="#" className="hover:text-black transition-colors">
            시계
          </a>
          <a href="#" className="hover:text-black transition-colors">
            SET UP
          </a>
        </nav>

        {/* 오른쪽 메뉴 */}
        <div className="flex items-center space-x-5 text-sm font-medium text-gray-500">
          <Link to="/login" className="hover:text-black transition-colors">
            Log-in
          </Link>
          <a href="#" className="hover:text-black transition-colors">
            Order
          </a>
          <a
            href="#"
            className="flex items-center hover:text-black transition-colors"
          >
            Basket <span className="ml-1 text-orange-500 font-semibold">0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
