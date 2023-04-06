import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'


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
  const {state} = useLocation()
  const { id } = useParams();

  const loadData = async () => {
    const pokemon = await getPokemonById(id);
    setPokemon(pokemon)
  }

  useEffect(() => {
    if(!state?.pokemon) loadData(); 
    else setPokemon(state.pokemon);
  }, [])


  return (
    <div>
      {/* <p>el id del pokemon seleccionado {id}</p> */}
      {(!pokemon) ? <p>cargando</p>
        : <div>
          <h1 >{pokemon.name}</h1>
          <div >
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}  />
          </div>
          {/* {pokemon.abilities.map((e) => <p>{e.ability.name}</p>)} */}
        </div>}
    </div>
  )
}

export default PokemonDetail