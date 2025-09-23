import React from 'react'
import { useState } from 'react'
import { use } from 'react'
import Input from './components/Input'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <Input todos={todos} setTodos={setTodos}/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App