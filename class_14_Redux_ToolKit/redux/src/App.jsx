import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addnumber, decrement, increment} from "./features/CounterSlice";
import { addname } from "./features/UserSlice";

const App = () => {
  const count = useSelector((state) => state.count.value);
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch();
  
  const [number, setnumber] = useState(0);
  const [name, setname] = useState(null);
  return (
    <div>
      <h1>Counter: {count}</h1>

      <input onChange={(e)=>{setnumber(e.target.value)}} type="number" placeholder="Enter number" />
      <button onClick={()=>{dispatch(addnumber(Number(number)))}}>Add</button>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

      <h1>Name: {user}</h1>
      <div><input onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Name" />
      <button onClick={()=>dispatch(addname(name))}>Add Name</button></div>
    </div>
  )
};

export default App;
