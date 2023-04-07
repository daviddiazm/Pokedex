import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import './PokemonDetail.css'

const getPokemonById = async (id) => {

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.data;
  } catch (error) {
    console.log(error);
  }
}


const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null)

  const { state } = useLocation()
  const { id } = useParams();

  const loadData = async () => {
    const pokemon = await getPokemonById(id);
    setPokemon(pokemon)
  }

  useEffect(() => {
    if (!state?.pokemon) loadData();
    else setPokemon(state.pokemon);
  }, [])


  return (
    <div className='pokemonDetail'>
      {/* <p>el id del pokemon seleccionado {id}</p> */}
      {(!pokemon) ? <p>cargando</p>
        : <div className='pokemonDetail__first-Card'>
          <div className='pokemonDetail__fc-firstView'>
            <img className='pokemonDetail__fc-img' src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            {/* <div></div> */}
          </div>
          <div className="pokemonDetail__fc-reference">
            <h3 className='pokemonDetail__id'>#{pokemon.id}</h3>
            <h1 className='pokemonDetail__name'>{pokemon.name}</h1>
            <section className="pokemonDetail__fc-refe-bottom">
              <div className="pokemonDetail__fc-types">
                <h3>Type</h3>
                <div className='pokemonDetail__fc-types-container'>
                  {pokemon.types.map((e) => <p className='pokemonDetail__fc-type'>{e.type.name}</p>)}
                </div>
              </div>
              <div className="polemonDetail__fc__abilities">
                <h3>Abilities</h3>
                <div className='polemonDetail__fc__abilities-container'>
                  {pokemon.abilities.map((e) => <p className='polemonDetail__fc__abilitie'>{e.ability.name}</p>)}
                </div>
              </div>
            </section>


            <section className='pokemonDetail__fc-stats'>
              {pokemon.stats.map((stat) => 
              <div>
                <h3>{stat.stat.name}</h3>
                <h4>{stat.base_stat}</h4>
              </div>
              )}
            </section>


          </div>
        </div>}
    </div>
  )
}

export default PokemonDetail