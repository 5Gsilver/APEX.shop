import React from "react";
import { useCart } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";

interface CartDrawerProps {
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ onClose }) => {
  const { items, total, removeItem } = useCart();

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 flex flex-col p-4">
      <button
        onClick={onClose}
        className="self-end text-gray-500 hover:text-gray-800 mb-4"
      >
        ✕ 닫기
      </button>
      <h2 className="text-xl font-semibold mb-4">장바구니</h2>

      <div className="flex-1 overflow-y-auto">
        {items.length === 0 && (
          <p className="text-gray-500">장바구니가 비었습니다.</p>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500">
                {formatCurrency(item.price)} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t">
        <p className="text-lg font-semibold">총합: {formatCurrency(total)}</p>
        <button className="w-full mt-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          결제하기
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
