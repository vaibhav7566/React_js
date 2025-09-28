import React, { useContext } from "react";
import { Mystore } from "../Context/MyContext";

const Model = () => {
  let { setToggle, cartitems, setCartitems } = useContext(Mystore);
  console.log(cartitems);
  return (
    <div className="w-full h-[80%]  flex flex-col gap-5 backdrop:blur-2xl bg-white/100 p-5  absolute">
      <div className="flex justify-between">
        <h1 className="bg-sky-500 w-20 flex font-bold justify-center items-center rounded h-9">
          My Cart
        </h1>
        <h1
          onClick={() => setToggle((prev) => !prev)}
          className="bg-red-600 w-12 font-bold flex justify-center items-center rounded h-9"
        >
          X
        </h1>
      </div>

      <div className="w-full h-full flex flex-wrap gap-5 rounded bg-amber-900 p-2">
        {cartitems?.map((elem) => {
          return (
            <div
              key={elem.id}
              className="w-[20%] h-[77%] mt-2 p-5 bg-amber-300 rounded-2xl"
            >
              <div className="w-full h-[175px]">
                <img
                  className="rounded h-[175px] w-full"
                  src={elem.image}
                  alt="Image here"
                />
              </div>
              <div className="mt-3">
                <h1 className="font-bold text-xl ">Name : {elem.name}</h1>
                <h1 className="font-bold text-xl ">Price : {elem.price}</h1>
                <h1 className="font-bold text-xl ">Rating : {elem.rating}</h1>
              </div>

              <button
                onClick={() => {
                  setCartitems(
                    cartitems.filter((itemcart) => itemcart.id !== elem.id)
                  );
                }}
                className="bg-red-700 mt-2 font-bold px-3 py-1 rounded"
              >
                Delete From Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Model;
