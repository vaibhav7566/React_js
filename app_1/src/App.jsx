// import Footer from "./Components/Footer";
// import { Middle } from "./Components/Middle";
// import Nav from "./Components/Nav";

// const App = () => {

// let name = "vaibhav";
// let age = 21;

//   return <>
//   <Nav name= {name} age={21}/>
//   <Middle/>
//   <Footer/>
//   </>
// }
// export default App;


import React from 'react'
import Reusable_comp from './Components/Reusable_comp';

const App = () => {
  let names = ["Arun","Aryan","Tarun","Stuti","Raghav","Vaibhav"];

  return 
<>
   {names.map((n,index) => {
    return <Reusable_comp key={index} name={n} />
  })}
</>
  
}

export default App; 


