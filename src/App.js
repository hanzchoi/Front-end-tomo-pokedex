import React, { Component } from 'react';
import './App.css';

import {pokemons} from './pokemonData';
import UserPokemonContainer from './containers/UserPokemonContainer'
import PokedexContainer from './containers/PokedexContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons
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
        <UserPokemonContainer userPokemons={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
