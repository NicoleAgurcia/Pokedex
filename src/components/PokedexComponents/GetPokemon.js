import axios from 'axios';


//let data = [{name: "nicole", age: 23},{name: "Brandon", age: 24}]

const getPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/');
}

const getPokemonById = (value) => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/' + value);
}

export default {getPokemonById,getPokemon};
