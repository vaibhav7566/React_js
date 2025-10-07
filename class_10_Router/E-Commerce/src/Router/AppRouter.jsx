import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home'
import About from '../Components/About'
import Card_Details from '../Components/Card_Details'

const Approuter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>

        <Route path='/:id' element={<Card_Details/>}/>
      </Routes>
    </div>
  )
}

export default Approuter