import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getProducts } from "../Apis/ProductsApi";

const getDataFromProductHook = () => {
  return (
    useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })
  )
}

export default getDataFromProductHook