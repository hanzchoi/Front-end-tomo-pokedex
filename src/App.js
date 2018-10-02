import React, { Component } from 'react';
import './App.css';

import {pokemon} from './pokemonData';

import PersonalPokemonContainer from './containers/PersonalPokemonContainer'
import PokedexContainer from './containers/PokedexContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemon
    }
  }

  
  // handleChange = () =>{
  //
  // }
  //<PokemonSearch handleChange={this.handleChange}/>

  render() {
    return (
      <div id="app">
        <PokedexContainer pokemons={this.state.pokemons}/>
        <PersonalPokemonContainer />
      </div>
    );
  }
}

export default App;
