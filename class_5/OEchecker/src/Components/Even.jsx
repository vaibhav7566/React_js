import React from 'react'

const Even = ({even}) => {

   let rander =  even.map(function(val,ind){
          return  <h2 key={ind}>{val}</h2>
        })
   
  return (
    <div>

       {rander}
    </div>
  )
}

export default Even