import React from 'react'

const Todos = ({todos}) => {
  return (
    <div>
        {todos.length?<h1>{todos}</h1>:<h1>No task yet</h1>}
    </div>
  )
}

export default Todos