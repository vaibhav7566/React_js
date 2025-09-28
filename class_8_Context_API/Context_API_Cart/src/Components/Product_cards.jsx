import React, { useContext } from "react";
import { Mystore } from "../Context/MyContext";

const Product_cards = ({ product, products }) => {
  let { setCartitems } = useContext(Mystore);
  return (
    <div className="w-[17.4%] max-h-[410px] p-3 bg-white rounded-lg shadow-2xl ">
      <div className="w-full h-[200px]">
        <img
          className="rounded h-full w-full"
          src={product.image}
          alt="Image here"
        />
      </div>
      <div className="mt-3">
        <h1 className="font-bold text-xl ">Name : {product.name}</h1>
        <h1 className="font-bold text-xl ">Price : {product.price}</h1>
        <h1 className="font-bold text-xl ">Rating : {product.rating}</h1>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            products.filter((elem) => {
              elem.id === product.id
                ? setCartitems((prev) => [...prev, elem])
                : null;
            })
          }
          className="bg-green-600 font-bold px-3 py-1 rounded"
        >
          Add to cart
        </button>
        
      </div>
    </div>
  );
};

export default Product_cards;
