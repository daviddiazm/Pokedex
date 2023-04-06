import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const PokedexLayout = () => {
  const {removeUser} = useContext(UserContext); 
  // const
  return (
    <div >
      <button onClick={removeUser}>
        log out
      </button>
      <Outlet/>
    </div>
  )
}

export default PokedexLayout