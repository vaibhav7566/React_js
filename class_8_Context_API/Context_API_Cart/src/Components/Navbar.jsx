import React, { useContext } from 'react'
import { Mystore } from '../Context/MyContext'


const Navbar = () => {
      let {setToggle} = useContext(Mystore)
  return (
    <div className='flex  w-screen h-full p-5 gap-212 '>

        <h1 className='bg-gray-600 px-10 font-bold text-3xl rounded-2xl text-white py-3'>Raste ka mall Sasta Me</h1>
        <button onClick={() => setToggle(prev => !prev)} className='bg-zinc-900 px-5 font-bold text-3xl rounded-2xl text-white py-3'>Cart Section</button>
    </div>
  )
}

export default Navbar