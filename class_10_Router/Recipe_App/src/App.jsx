import React from 'react'
import Approuter from './Router/Approuter'
import Navigation from './Router/Navigation'

const App = () => {
  return (
    <div className='w-screen'>
      <Navigation/>
      <Approuter/>

    </div>
  )
}

export default App