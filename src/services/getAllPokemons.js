import axios from "axios";

export const getAllPokemons = async () => {
    // const url= 'https://pokeapi.co/api/v2/pokemon/'
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1300'
    try {
      const res = await axios.get(url);
      return res.data.results
    } catch (error) {
      console.log(error);
    }
  }
