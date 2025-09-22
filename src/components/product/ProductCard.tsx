import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart, CartItem } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";

interface ProductCardProps {
  product: CartItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h3
        className="font-semibold text-lg cursor-pointer mb-2"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        {product.name}
      </h3>
      <p className="text-gray-700 mb-4">{formatCurrency(product.price)}</p>
      <button
        onClick={() => addItem(product, 1)}
        className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        장바구니에 담기
      </button>
    </div>
  );
};

export default ProductCard;
