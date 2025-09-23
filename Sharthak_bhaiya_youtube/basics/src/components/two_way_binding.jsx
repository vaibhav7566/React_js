//Two way binding and form handling

import React, { useState } from 'react'

const Two_way_binding = () => {

  const [username, setusername] = useState('')

  let submitHandler = (e) => {
e.preventDefault(); 
console.log(username);
setusername('');
  }
 
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input className='px-4 py-3 border-2 border-black rounded-2xl text-3xl m-40' 
        value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }}
        type="text"
         placeholder='Enter Your name' />
        <button className='bg-green-500 rounded-3xl px-3 py-3'>Submit</button>
      </form>
    </div>
  )
}

export default Two_way_binding
