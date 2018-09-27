import React, { Component } from 'react';

import {pokemon} from './pokemonData';
import PokemonContainer from './components/PokemonContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemon
    }
  }

  render() {
    return (
      <PokemonContainer pokemons={this.state.pokemons}/>
    );
  }
}

export default App;
