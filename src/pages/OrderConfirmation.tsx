import React from "react";
import { useParams } from "react-router-dom";

const OrderConfirmation: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">주문 완료</h1>
      <p className="text-gray-700">주문번호: {id}</p>
      <p className="mt-2">감사합니다! 곧 배송이 시작됩니다.</p>
    </div>
  );
};

export default OrderConfirmation;
