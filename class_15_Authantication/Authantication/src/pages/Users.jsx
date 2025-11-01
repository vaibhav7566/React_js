import React from 'react'
import axios from 'axios'

const Users = () => {

  
const fetchdata = async () => {
 try {
   let res = await axios.get('https://fakestoreapi.com/users');
  if(res){
   console.log(res.data);
  }
 } catch (error) {
  alert('Error in fetching data!');
 }
}
fetchdata();
  return (
    <div>
          <h1>this Users Components</h1>
    </div> 
  )
}

export default Users