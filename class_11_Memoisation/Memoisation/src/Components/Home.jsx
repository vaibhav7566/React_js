import React from 'react'


const Home = ({greet}) => {
    console.log("This is Home")
  return (
    <div>
        <h2>This is Home</h2>
    </div>
  )
}

export default React.memo(Home)