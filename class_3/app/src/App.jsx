// Tarika no. 1

import React from 'react'
import Names from './Components/names';
import Usestate from './Components/useState';

const App = () => {

let names = ["Vaibhav","stuti","Ragahv","Tavishi"];
// console.log(names);
  return (
    <>
    {
      names.map((val,index) => {
        // return <h1 key = {index}> value = {val}</h1>
        return <Names key = {index} value = {val}/>
      })
    }
<Usestate/>
    </>
  )
}
export default App


// Tarika no. 2

// import React from 'react'
// import Names from './Components/names';

// const App = () => {
//   let names = ["Vaibhav","stuti","Ragahv","Tavishi"];

//   return <>
//  <Names names = {names}/>
//   </>
// }

// export default App
