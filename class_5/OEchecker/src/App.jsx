// import React, { use, useState } from 'react'
// import Odd from './Components/Odd'
// import Even from './Components/Even'

// const App = () => {
//   const [number, setNumber] = useState("")
//   const [even, seteven] = useState([])
//   const [odd, setodd] = useState([])

//   let check = (number)=>{
//     let inpnum = Number(number);

//     if(isNaN(inpnum)){
//       setNumber("") 
//       return;
//     } 

//     if(inpnum%2 === 0){
//      seteven([...even,inpnum]);
//     }else{
//       setodd([...odd,inpnum]);
//     }
//     setNumber("")
//   }
//   return (
//     <div>
//       <h1>Odd Even Checker</h1>
//       <div>
//         <input value={number}
//         onChange={(e)=>{setNumber(e.target.value)}}
//         type="text" 
//          placeholder='Enter Number' />
//         <button onClick={()=>{check(number)}}>Show</button>
//       </div>

//       <div>
//         <h1><Odd  odd = {odd}/></h1>
//         <h1><Even even = {even}/></h1>
//       </div>
//     </div>
//   )
// }

// export default App





import React, { use, useState } from 'react'
import Odd from './Components/Odd'
import Even from './Components/Even'

const App = () => {
  const [number, setNumber] = useState("")
  const [even, seteven] = useState([])
  const [odd, setodd] = useState([])

  let check = (number) => {
    let inpnum = Number(number);

    if (isNaN(inpnum)) {
      setNumber("")
      return;
    }

    if (inpnum % 2 === 0) {
      seteven([...even, inpnum]);
    } else {
      setodd([...odd, inpnum]);
    }
    setNumber("")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Odd Even Checker</h1>

      <div className="flex gap-3 mb-6">
        <input
          value={number}
          onChange={(e) => { setNumber(e.target.value) }}
          type="text"
          placeholder="Enter Number"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => { check(number) }}
          className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Show
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Odd Numbers</h2>
          <Odd odd={odd} />
        </div>
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Even Numbers</h2>
          <Even even={even} />
        </div>
      </div>
    </div>
  )
}

export default App
