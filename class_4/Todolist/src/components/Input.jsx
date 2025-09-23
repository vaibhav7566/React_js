import React from 'react'
import { useState } from 'react'

const Input = ({todos,setTodos}) => {

    const [inp, setInp] = useState('')

  return (
    <div>
        <h1>Todo List</h1>
        <input
        onChange={(e)=>{setInp(e.target.value)}}
        type="text" placeholder='Write Task!' />
        <button onClick={() => setTodos([...todos, inp])}>Add Task</button>
    </div>
  )
}

export default Input