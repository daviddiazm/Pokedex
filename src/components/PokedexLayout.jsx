import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

import "./PokedexLayout.css"

const PokedexLayout = () => {
  const { removeUser } = useContext(UserContext);
  // const
  return (
    <div className='pokede__layout'>

      <header className="pokedexLayout__header">
          <img className='pokeLay__img' src="https://64.media.tumblr.com/d0a6337e555169f950fb3101045fb8ba/b276d43b38632350-12/s1280x1920/08ff32dba9de0098f058d25d5994cd87a60bcc20.pnj" alt="" />
        
        <button className='pokeLay__btn' onClick={removeUser}>
          log out
        </button>
      </header>

      <Outlet />
    </div>
  )
}

export default PokedexLayout