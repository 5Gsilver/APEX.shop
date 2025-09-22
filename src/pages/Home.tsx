import { Layout } from "lucide-react";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <Layout className="w-12 h-12 text-blue-600 mb-2" />
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to MyShop
      </h1>
      <p className="text-gray-700 text-lg">여기서 쇼핑을 시작해보세요!</p>
    </div>
  );
};

export default Home;
