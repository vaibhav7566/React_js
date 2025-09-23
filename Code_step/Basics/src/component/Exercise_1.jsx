import React from 'react'

 function callFun(){
        alert("Function outside")
    }

const Exercise_1 = () => {

    function callFun(name,age){
        alert(age,name)
    }
  return (
    <div>
       <button onClick={()=>callFun("vaibhav",21)}>CLick btn</button>
    </div>
  )
}

export default Exercise_1