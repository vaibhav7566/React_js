import axios from "axios";
import React, { use, useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { NavLink } from "react-router";

const Home = () => {
  const [productsdata, setProductsdata] = useState([]);

  let fetchProductsData = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");

      if (response) {
        setProductsdata(response.data);
      }
    } catch (error) {
      console.log("Error while fetching data from server!");
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  console.log(productsdata);
  return <div className="bg- flex flex-wrap gap-5 w-full mt-10 ml-7">

{productsdata.map((elem)=>{
return  <ProductsCard key={elem.id} {...elem}/> 
})}
    
  </div>;
};

export default Home;
