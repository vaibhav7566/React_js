import React, { useState } from 'react'

const Usestate = () => {
    // let count = 0;
    let [count,setcount] = useState(0);
    
  return <>
  <h1>count : {count}</h1>
  <button onClick={()=>{(setcount(count+1));
    console.log(count)
  }}>Increment</button>

  </>
}

export default Usestate;