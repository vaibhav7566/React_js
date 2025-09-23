// import React, { useState } from 'react'
// import Hide from './Hide'

// const Toggle = () => {
//     const [display, setDisplay] = useState(true)
//   return (
//     <div>

//         <button onClick={()=>{setDisplay(!display)}}>Toggle</button>
//         {display?<h1>Toggle ho rha hai</h1>:null}
//         {/* {display?<Hide/>:null}   */}

//     </div>
//   )
// }

// export default Toggle




// import React, { useState } from 'react'

// const Toggle = () => {
//   const [counter, setCounter] = useState(0)
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={()=>{setCounter(counter+1)}}>Count Increase on click</button>
//      {counter==0?<h1>condition 0</h1>: counter === 1 ? <h1>condition 1</h1>:counter ===2 ? <h1>condition 2</h1>: null}
//     </div>
//   )
// }

// export default Toggle


import React, { useState } from 'react'
import Hide from './Hide'

const Toggle = () => {

const [name, setname] = useState()

  let userinfo = {
    name : "Vaibhav",
    age: 21,
    college:"oist"
  }
  return (
    // <div><Hide user = {userinfo}/></div>
    <>
    <button onClick={()=>{setname("Vaibhav")}}>change name</button>

{name? <Hide name = {name}/>:null}    </>
  )
}

export default Toggle