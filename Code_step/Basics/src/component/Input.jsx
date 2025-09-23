import React, { use, useState } from 'react'

const Input = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()

   let inpvalues = ()=>{

   }
  return (
    <div className='flex flex-col'>
        
        <form >
            <div>
            <label htmlFor="name">Name</label>
            <input value={name}
            onChange={(e)=>{setName(e.target.value)}}
            className='mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl' 
             type="text" 
             placeholder='Name' />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className='mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl' 
            type="text" 
            placeholder='Email' />
        </div>

        <div>
            <label htmlFor="address">Address</label>
            <input value={address}
            onChange={(e)=>{setAddress(e.target.value)}}
            className='mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl'
             type="text" 
             placeholder='Address' />
        </div>
        </form>

        <button onClick={()=>{setName(""),setEmail(""),setAddress("")}}>clear</button>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{address}</h3>
    </div>
  )
}

export default Input