import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Features/CartSlice";

const Cart = () => {
  const { cartitems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Total cart value
  const total = cartitems
    .reduce(
      (sum, item) =>
        sum +
        (item.pro.price -
          (item.pro.price * item.pro.discountPercentage) / 100) *
          item.quantity,
      0
    )
    .toFixed(2);



  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        🛒 Your Shopping Cart
      </h1>

      {cartitems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your cart is empty 😔
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {cartitems.map((item) => (
            <div
              key={item.pro.id}
              className="flex bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.pro.thumbnail}
                alt={item.pro.title}
                className="w-32 h-32 object-cover"
              />

              {/* Details */}
              <div className="flex flex-col justify-between p-4 flex-grow">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.pro.title}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {item.pro.brand}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {item.pro.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <div>
                    <span className="text-green-600 font-semibold">
                      $
                      {(
                        item.pro.price -
                        (item.pro.price * item.pro.discountPercentage) / 100
                      ).toFixed(2)}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      x {item.quantity}
                    </span>
                  </div>
<div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg w-28 px-2 py-1 shadow-sm">
  <button
    onClick={() => dispatch(removeFromCart(item))}
    className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-200 text-gray-700 font-bold text-lg hover:bg-red-500 hover:text-white transition-all"
  >
    –
  </button>

  <span className="text-gray-800 font-semibold text-base">{item.quantity}</span>

  <button
    onClick={() => dispatch(addToCart(item))}
    className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-200 text-gray-700 font-bold text-lg hover:bg-blue-500 hover:text-white transition-all"
  >
    +
  </button>
</div>

                </div>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="flex justify-between items-center mt-8 bg-white p-4 rounded-xl shadow">
            <span className="text-lg font-semibold text-gray-800">Total:</span>
            <span className="text-xl font-bold text-green-600">${total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
