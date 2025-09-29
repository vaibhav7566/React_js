import React from "react";
import { useState } from "react";
import { use } from "react";

const Counter2 = () => {
    const [count1, setCount1] = useState(0);
    console.log("count:" + count1 )
  return (
    <div>
      <div className="bg-gray-300 w-fit p-5 rounded-xl mt-10">
        <h1 className="text-2xl">Inside The Counter 2</h1>
        <h1 className="text-xl">Count: {count1}</h1>

        <button
          className="text-xl bg-blue-600 p-3 rounded-xl"
          onClick={() => setCount1(count1 + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter2;
