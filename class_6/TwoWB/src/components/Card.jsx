import React from 'react'

const Card = ({name,email,password}) => {
  return (
    <div className='w-65 h-35 bg-zinc-300 rounded-2xl p-3 text-md flex flex-col justify-center gap-3 font-bold m-2 shadow-xl'>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Password: {password}</h1>
    </div>
  )
}

export default Card