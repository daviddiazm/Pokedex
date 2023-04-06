import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import PokedexLayout from '../components/PokedexLayout';
import { UserContext } from '../context/UserContext';

import './Home.css'

const Home = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState(null);
  const { user, saveUser } = useContext(UserContext)

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newNameValue = e.target.value
    setNameValue(newNameValue);
    if (newNameValue === '') setNameError('Name is required');
    else if (!/^[A-Z][a-z ]{2,}$/.test(newNameValue))
      setNameError('Only letters min 3 lettres and into with mayus');
    else setNameError(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError) {
      saveUser(nameValue);
    }
  }


  return (
    <div className='Home'>
      <div className="home__hotZone">
        <div className='home__img-ccontainer'>
          <img className='home__img' src="https://64.media.tumblr.com/d0a6337e555169f950fb3101045fb8ba/b276d43b38632350-12/s1280x1920/08ff32dba9de0098f058d25d5994cd87a60bcc20.pnj" alt="" />
          {/* <img className='home__img' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1680480000&Signature=Tr9zNQTb0fUhyJmZH9NP3qwVdfWVXIrkosGlSvI86Yig9zLhhR75thPor8ACsSctprhOn5NjOavtetDjvcXhQjI0A3uVW5CCUwjEqxD45lmyYGgI1yCca0zSZ1iMIDOMHX-XyM5uu4w5vMUVk4K3PgIyYUicJzpZlOENYBDxwM3M18PYVs6bEqSNsEksGRaHJEQEt3F8rwRPM2rb3E17ISCJv67bACWbCojPFH7~hCk7sLletlxbh6mll5meJ4VqQYtnBJ0llqIxY5D9a2jnhffEulOGh8AX2uPl3sWhez4jkBqsIDhYsecxs1wpasVpLHGPwfio0-lh83Dn4dDQNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /> */}
          {/* <img className='home__img' src="https://craig1123.github.io/pokedex/img/Pokedex.png" alt="" /> */}
        </div>
        <div className='home__text-zone'>
          <h2 >
            ¡Hello Trainer!
          </h2>
          <h3>Type your name</h3>
        </div>
        <form action=""
          className='home__form'
          onSubmit={handleSubmit} >
          <input
            className='home__input-Text'
            type="text"
            value={nameValue}
            onChange={handleChange} />
          <button type='submit' className='home__input-btn'> start</button>
        </form>
      </div>

      {nameError && <p >{nameError}</p>}

      <footer className='home__footer'>
      </footer>

      {user && <Navigate to="/pokedex" replace />}
    </div>
  )
}

export default Home