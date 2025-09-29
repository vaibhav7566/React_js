import React from "react";
import { useState } from "react";
import { use } from "react";
import Counter2 from "./Counter2";

const Counter1 = () => {
    const [count2, setCount2] = useState(0);
    console.log("count:" + count2 )
  return (
    <div>
      <div className="bg-gray-300 w-fit p-5 rounded-xl mt-10">
        <h1 className="text-2xl">Inside The Counter 1</h1>
        <h1 className="text-xl">Count: {count2}</h1>

        <button
          className="text-xl bg-blue-600 p-3 rounded-xl"
          onClick={() => setCount2(count2 + 1)}
        >
          Increment
        </button>
      </div>

      <Counter2/>
    </div>
  );
};

export default Counter1;
