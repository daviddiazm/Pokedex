import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import './PokemonCard.css'

const getPokemonById = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

const PokemonCard = ({ pokemonData }) => {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  const loadPokemon = async () => {
    const pokemonInfo = await getPokemonById(pokemonData.url);
    // console.log(pokemonInfo);
    setPokemon(pokemonInfo);
  }

  const handleClickNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`, { state: { pokemon } })
  }

  useEffect(() => {
    loadPokemon();
  }, [])


  return (
    <div className='PokemonCard'>
      {!pokemon ? <p>Cargando</p>
        : <article onClick={handleClickNavigate}>

          <section className='pokemonCard__top'>
            <div></div>
            <img className='pokeCard__img' src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          </section>

          <section className='pokemonCard__bottom'>
            <section className='pokemonCard__reference-info'>
              <h3 >{pokemon.name}</h3>
              <h4>{pokemon.types[0].type.name}</h4>
              <h5>Tipo</h5>
            </section>

            <section className='pokemonCard__stats-info_container'>
              {/* {pokemon.stats.map((stat) => {
                <section key={stat.stat.name}>
                  <h3>a {stat.stat.name}</h3>
                  <p>b {stat.base_stat}</p>
                </section>
              })} */}
              {pokemon.stats.map(stat => (
                <section key={stat.stat.name} className='pokeCard__stats'>
                  <h3>{stat.stat.name.toUpperCase()}</h3>
                  <p>{stat.base_stat}</p>
                </section>
              ))}
            </section>


          </section>
        </article>
      }
    </div>

  )
}

export default PokemonCard