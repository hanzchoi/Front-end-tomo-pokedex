import React, { Component } from 'react';
import PokeList from './PokeList';

class PokemonContainer extends Component{

  createPokemonList = () => {
    return this.props.pokemons.map(pokemon => <PokeList key={pokemon.id} pokemon={pokemon} />)
  }

  render(){
    return(
      {createPokemonList()}
    )
  }
}

export default PokemonContainer;
