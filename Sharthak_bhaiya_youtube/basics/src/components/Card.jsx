import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-black w-80 h-80 m-1 rounded-2xl text-white text-2xl flex flex-col items-center justify-center gap-5'>
        <img className='w-25 h-25 rounded-full' src={props.img} alt="" />
        <h1>Name- {props.name}</h1>
        <h2>Age- {props.age}</h2>
        <h1>City- {props.city}</h1>
    </div>
  )
}

export default Card