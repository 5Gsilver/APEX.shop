import React from "react";
import { useParams } from "react-router-dom";
import { CartItem } from "../context/CartContext";
import ProductCard from "../components/product/ProductCard";

const sampleProduct: CartItem = {
  id: "1",
  name: "상품 상세보기 예시",
  price: 15000,
  image: "/src/assets/images/product-placeholder.jpg",
  quantity: 1,
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">상품 상세보기 (ID: {id})</h1>
      <ProductCard product={sampleProduct} />
      <p className="mt-4 text-gray-700">여기에 상품 상세 설명이 들어갑니다.</p>
    </div>
  );
};

export default ProductDetail;
