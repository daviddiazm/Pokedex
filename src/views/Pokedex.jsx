import React, { useContext, useEffect, useState } from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'
import { UserContext } from '../context/UserContext'
import { usePagination } from '../hooks/usePagination'
import './Pokedex.css'

const Pokedex = () => {

  const { user } = useContext(UserContext);
  const { pokemons, types, name, type } = useLoaderData();
  const [fontPagColor, setFontPagColor] = useState('');
  const [pokemonName, setPokemonName] = useState(name ?? '')
  const [PokemonType, setPokemonType] = useState(type ?? '')
  const pokemonsPagination = usePagination(pokemons, 55);


  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setPokemonType(e.target.value);
  };

  const currentColorPagination = (pageCur , page) => {
    pokemonsPagination.currentPage
    if(pageCur == page) {
      return '#DD1A1A';
    }else {
      return '#010101';
    }
  }

  

  return (
    <div className='Pokedex'>

      <h4 className='pokedex__welcome'>Bienvendo <span >{user}</span>! aqui podras encontrar a tu pokemon favortio</h4>

      <div className='pokedex__pagination'>
        {pokemonsPagination.pages.map((page) => (
          <button key={page}  onClick={() => pokemonsPagination.changePageTo(page) } className={{}} >{page}</button>
        ))}
      </div>

        <Form className='pokedex__type-name'>
          <h3 >Pokemon filtter</h3>

          <div className='pokedex__type-name__Container'>
              <input type="text" name='pokemon_name' value={pokemonName} onChange={handleNameChange} />

              <select name="pokemon_type" id="" value={PokemonType} onChange={handleTypeChange}>
                <option value="">All</option>
                {types.map((type) => (
                  <option key={type.url} value={type.name}>
                    {type.name}
                  </option>))}
              </select>
            <button type="submit">
              Search
            </button>
          </div>
        </Form>

      <section className='pokedex__Card-list'>
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>

    </div>
  )
}

export default Pokedex