import React, { useEffect, useState } from "react";
import { Link, Star } from "lucide-react";
import { useParams } from "react-router";
import axios from "axios";

const Card_Details = ( ) => {

  let {id} = useParams();
  console.log(id)

  const [product, setProduct] = useState([])


  let fetchSingleProductDets = async() =>{
try {
  let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    if(res){
    setProduct(res.data);
    
    }
} catch (error) {
  console.log("Error in fetching single product data.")
}
  }

  useEffect(() => {
    fetchSingleProductDets();
  }, [id]);
  
  console.log(product )
 
  
  return (
    <div>
      {product.title}
      {product.image}
      {product.description}
      {/* {product.rating.rate} */}
      {product.price}
    </div>
  );
};

export default Card_Details;
