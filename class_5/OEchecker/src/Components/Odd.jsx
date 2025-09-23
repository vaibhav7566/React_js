import React from 'react'

const Odd = ({odd}) => {

   let oddvalue =  odd.map((val, index) => {
        return <h1 key={index}>{val}</h1>
    })
    
  return (
    <div>
        
        {oddvalue} 
    </div>
  )
}

export default Odd