import React from "react";
import { useCart } from "../context/CartContext";
import formatCurrency from "../utils/formatCurrency";

const CartPage: React.FC = () => {
  const { items, total, removeItem, updateQuantity } = useCart();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">장바구니</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">장바구니가 비었습니다.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">
                  {formatCurrency(item.price)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  className="border rounded w-16 p-1 text-center"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-4 font-semibold text-lg">
            총합: {formatCurrency(total)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
