import React from "react";

const ProductCard = ({ elem }) => {
  console.log(elem)
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition duration-300 m-5">
      {/* Product Image */}
      <img
        src={elem.image}
      
        className="w-full h-48 object-cover"
      />

      {/* Card Body */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 truncate">{elem.title}</h2>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-2">{elem.category}</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {elem.description}
        </p>

        {/* Rating & Price */}
        <div className="flex items-center justify-between">
          <span className="bg-yellow-400 text-white px-2 py-1 rounded-md text-sm font-semibold">
            ⭐ {elem.rating.rate}
          </span>
          <span className="text-lg font-bold text-green-600">₹{elem.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
