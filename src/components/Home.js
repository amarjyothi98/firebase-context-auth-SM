import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from 'react-bootstrap';

export default function Home() {

  const { user, logOut, displayName } = useUserAuth(); 
  console.log(user); 

  const handleLogout = async () => {
    try {
      await logOut(); 
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h1>hello welcome <br /> {user && user.email} </h1>
      <h3>{displayName}</h3>
      <Button variant='primary' onClick={handleLogout}>Log Out</Button>
    </div>
  )
}
