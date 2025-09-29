// import React from "react";
// import { useState } from "react";
// import Counter1 from "./components/Counter1";

// const App = () => {
//   const [count, setCount] = useState(0);
//   console.log("count:" + count);

//   return (
//     <div className="m-5">
//       <div className="bg-gray-300 w-fit p-5 rounded-xl">
//         <h1 className="text-2xl">Inside The app</h1>
//         <h1 className="text-xl">Count: {count}</h1>

//         <button
//           className="text-xl bg-blue-600 p-3 rounded-xl"
//           onClick={() => setCount(count + 1)}
//         >
//           Increment
//         </button>
//       </div>

//       <Counter1 />
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log("Error fetching data!"));
  }, []);

  return <div className="flex flex-wrap">

    {products.map((elem) => {
     return <ProductCard key={elem.id} elem ={elem}/>
    })}
  </div>
};

export default App;
