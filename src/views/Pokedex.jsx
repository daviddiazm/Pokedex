import React, { useContext, useEffect, useState } from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'
import { UserContext } from '../context/UserContext'
import { usePagination } from '../hooks/usePagination'

const Pokedex = () => {

  const { user } = useContext(UserContext);
  const { pokemons, types , name, type} = useLoaderData();
  const [pokemonName, setPokemonName] = useState(name ?? '')
  const [PokemonType, setPokemonType] = useState(type ?? '')
  const pokemonsPagination = usePagination(pokemons, 55);

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setPokemonType(e.target.value);
  };

  return (
    <div  >

      <h2>Pokedex</h2>
      <p><span  >Bienvendo {user}</span> aqui podras encontrar a tu pokemon favortio</p>

      <div >
        {pokemonsPagination.pages.map((page) => (
          <button key={page} onClick={() => pokemonsPagination.changePageTo(page)} className={pokemonsPagination.currentPage === page ? 'text-red-800' : 'tengo que arreglar esto, no me gusta tailwind xd' } >{page}</button>
        ))}
      </div>

      <section>
        <Form>
          <h3 >Pokemon filtter</h3>

          <div >
            <div >
              <input type="text" name='pokemon_name' value={pokemonName} onChange={handleNameChange}/>

              <select name="pokemon_type" id="" value={PokemonType} onChange={handleTypeChange}>
                <option value="">All</option>
                {types.map((type) => (
                  <option key={type.url} value={type.name}>
                    {type.name}
                  </option>))}
              </select>
            </div>
            <button type="submit">
              Search
            </button>
          </div>
        </Form>
      </section>

      <section>
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>

    </div>
  )
}

export default Pokedex