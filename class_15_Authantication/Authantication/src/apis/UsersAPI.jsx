import { Instance } from "../config/AxiosInstance";

export const fetchdata = async () => {
 try {
   let res = await Instance('/users');
  if(res){
    // console.log(res.data) 
   return res.data;
  }
 } catch (error) {
  alert('Error in fetching data!');
 }
}