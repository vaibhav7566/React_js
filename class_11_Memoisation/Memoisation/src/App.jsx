// import React, { use, useCallback, useMemo, useState } from "react";
// import Home from "./Components/Home";
// import About from "./Components/About";

// const App = () => {
//   const [count, setcount] = useState(0)
//   console.log("This is App");

//   // const greet = useCallback(() => {
//   //   return console.log(count)
//   // },[])

//   const calcu = useMemo(() => {
//     return 100*5;
//   },[]);


//   return (
//     <div>
//       <h1>This is App- {count}</h1>
//       <button onClick={() => setcount(count + 1)}>Increment</button>

//       <Home  greet={greet}/>
//       <About calcu={calcu}/>
//     </div>
//   );
// };

// export default App;


import React, { useCallback, useMemo, useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'



const App = () => {

  const [count, setcount] = useState(0)

  const greet = useCallback(()=>{
  console.log("This greet");
},[])

const calcu = useMemo(() => {
return count+10;
},[count])

  console.log("This is App ")
  return (
    <div>This is App - {count}
<button onClick={()=>setcount(count+1)}> Increment</button>

    <Home greet = {greet}/>
    <About calcu={calcu}/>

    </div>
    
  )
}

export default App