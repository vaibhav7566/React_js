import React from 'react'
import Two_way_binding from './components/two_way_binding'
import Card from './components/Card'

const App = () => {

  let users = [
  {
    "name": "Alice Johnson",
    "age": 28,
    "city": "New York",
    "image": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Michael Smith",
    "age": 34,
    "city": "Los Angeles",
    "image": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Sophia Martinez",
    "age": 25,
    "city": "Chicago",
    "image": "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    "name": "David Lee",
    "age": 41,
    "city": "San Francisco",
    "image": "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    "name": "Emma Brown",
    "age": 30,
    "city": "Seattle",
    "image": "https://randomuser.me/api/portraits/women/12.jpg"
  }
]



  return (
    <div className='flex '>
      {/* <Two_way_binding/> */}
      
      {users.map(function(val,index){
       return <Card key = {index} name = {val.name} age = {val.age} city = {val.city} img = {val.image}/>
      })}
    </div>
  )
}

export default App