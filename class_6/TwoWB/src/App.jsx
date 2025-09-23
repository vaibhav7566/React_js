import React, { useState } from 'react'
import Form from './components/Form'
import Usercard from './components/Usercard'

const App = () => {

  const [usersdata, setUsersdata] = useState(() => JSON.parse(localStorage.getItem("Usersdata")) || [] );

const deletehandler = (id) =>{
  const filtereddata = usersdata.filter((user,i)=> i!==id )
  setUsersdata(filtereddata);
}

  return (
    <div >
      <Form usersdata = {usersdata} setUsersdata = {setUsersdata}/>

      <div className='flex'>
        {usersdata.map((user,i)=>{
        //  return <Usercard key={i} name={user.name} email={user.email} contact={user.contact} image={user.image}/>
        return <Usercard key={i} {...user} id={i} deletehandler={deletehandler}/>
        })}
      </div>
    </div>
  )
}

export default App















