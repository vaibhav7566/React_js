import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductsCard = ({ image, title, description, price, rating, id }) => {
  let navigate = useNavigate();

  const product = { image, title, description, price, rating, id };

  return (
    <div
      onClick={() => { 
        navigate(`/${id} `, product);
      }}
      className="w-[23%]  bg-white rounded-2xl p-2 overflow-hidden border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h2>

        {/* Price */}
        <div className="flex gap-3">
          <div className="text-xl font-bold text-gray-900">₹{price}</div>

          {/* Rating Section */}
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="#facc15" stroke="#facc15" />
            <span className="text-gray-700 text-sm font-medium">
              {rating.rate}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Add to Cart
          </button>
          <button className="flex-1 bg-amber-300 text-white py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
