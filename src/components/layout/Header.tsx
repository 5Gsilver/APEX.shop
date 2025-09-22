import React from "react";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* 로고 */}
        <div className="text-2xl font-bold tracking-wide">기업 이름</div>

        {/* 네비게이션 */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-800">
          <a href="#">NEW</a>
          <a href="#">BEST</a>
          <a href="#">MADE</a>
          <a href="#">TOP</a>
          <a href="#">BOTTOM</a>
          <a href="#">SHOES</a>
          <a href="#">시계</a>
          <a href="#">SET UP</a>
          <a href="#">BIG SIZE</a>
        </nav>

        {/* 오른쪽 메뉴 */}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <a href="#">Log-in</a>
          <a href="#">Order</a>
          <a href="#" className="flex items-center">
            <ShoppingCart size={16} className="mr-1" />
            Basket <span className="ml-1 text-orange-400">0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
