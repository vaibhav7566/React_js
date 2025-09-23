// import { useState } from "react"

// const App = () => {
//   const [num, setNum] = useState(0);
//   return <>
//   <h1>Number : {num}</h1>
//   <button onClick={()=>{setNum(num+1)}}>Increment</button>
//   <button onClick={()=>{if(num>0)
//     {setNum(num-1)}}}>Decrement</button>
//   </>
// }

// export default App;

import React from 'react'
import { useState } from 'react'

const App = () => {

 let arr = ['shiv', 'shivani' , 'patel', 'abc'];
  // console.log("value :", arr)

   
  return (
    <>
     <div>My Name is Vaibhav </div>
     {/* <h1>value : {arr}</h1> */}
     {arr.map((val)=> {
       return  <h1>value : {val}</h1>
     })}
   
    </>
   

  )
}


export default App