import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Features/CartSlice";

const Product = ({ pro }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { cartitems } = useSelector((state) => state.cart);
  const discountedPrice = (
    pro.price -
    (pro.price * pro.discountPercentage) / 100
  ).toFixed(2);

  const itemExist = cartitems.find((elem) => elem.pro.id === pro.id);

  return (
    <div className="bg-white shadow-md rounded-xl max-w-sm w-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={pro.thumbnail}
        alt={pro.title}
        className="w-full h-64 object-cover"
      />

      {/* Product Info */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{pro.title}</h2>
          <span className="text-sm text-gray-500 font-medium">{pro.brand}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {pro.description}
        </p>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-green-600">
            ${discountedPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${pro.price}
          </span>
          <span className="text-sm text-red-500">
            -{pro.discountPercentage}%
          </span>
        </div>

        {/* Rating & Stock */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-500 font-semibold">⭐ {pro.rating}</span>
          <span
            className={`text-sm font-medium ${
              pro.availabilityStatus === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {pro.availabilityStatus}
          </span>
        </div>

        {/* Add to Cart Button and add to cart increment and decrement */}

        {itemExist ? (
          <div className="flex items-center justify-center gap-4 border border-gray-300 rounded-lg px-4 py-2 w-fit mx-auto bg-white shadow-sm hover:shadow-md transition-all duration-200">
            {/* - button */}
            <span onClick={() => dispatch(removeFromCart({pro}))} className="cursor-pointer text-gray-600 text-xl font-semibold hover:text-gray-900 select-none">
              −
            </span>

            {/* quantity */}
            <span className="text-gray-800 text-lg font-medium select-none">
              {itemExist.quantity}
            </span>

            {/* + button */}
            <span
              onClick={() => dispatch(addToCart({ pro }))}
              className="cursor-pointer text-gray-600 text-xl font-semibold hover:text-gray-900 select-none"
            >
              +
            </span>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart({ pro }))}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
