import React from "react";
import PokemonService from "./GetPokemon";
import Pokemon from "./Pokemon";

export default class PokeCatalog extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            pokemons: [],
            pokemon: {},
            value: 0,
        }
    }

    componentDidMount() {
        PokemonService.getPokemon()
        .then( response => this.setState({ pokemons: response.data.results }) );
    }

    updatePokemon(id){
        PokemonService.getPokemonById(id)
        .then(res => this.setState({ pokemon: res.data }) );
    }

    handleChange(event) {
        let id  = event.target.value;
        this.setState({ value: id });
        this.updatePokemon(id);
    }
    
    render () {
        return (
            <div>
                {this.state.pokemons.map((p,i) => <Pokemon key ={i} pokemon ={p}  />)}
                <Pokemon pokemon={this.state.pokemon}/>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}