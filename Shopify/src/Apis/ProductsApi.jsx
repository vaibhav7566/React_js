import { axiosInstance } from "../Config/AxiosInstanse";



export const getProducts = async () => {
    try {
      let res = await axiosInstance("/products");
     if(res){
       return res.data.products;
     }
    } catch (error) {
      alert("Oops! Error in fetching products data");
    }
  };