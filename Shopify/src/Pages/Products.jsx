import React, { useEffect } from "react";
import Product from "../Components/Product";

import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../Apis/ProductsApi";
// import { useQueries, useQuery } from "@tanstack/react-query";
import { setProduct } from "../Features/ProductsSlice";
import getDataFromProductHook from "../Hooks/getDataFromProductHook";


const Products = () => {
  // const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { data, isPending, error } = getDataFromProductHook();

 // ✅ Update Redux store when data changes
    useEffect(() => {
    if (data) dispatch(setProduct(data));
  }, [data, dispatch]);
  

   // ✅ Conditional rendering based on query status
  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Loading products...
      </div>
    );
  }

   if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        ⚠️ Failed to load products. Please try again.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-5">
      {products?.map((pro) => {
        return <Product key={pro.id} pro={pro} />;
      })}
    </div>
  );
};

export default Products;
