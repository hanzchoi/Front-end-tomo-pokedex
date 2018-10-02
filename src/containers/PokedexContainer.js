import React, { Component } from 'react';
import PokedexList from '../components/PokedexList';
import PokemonSearch from '../components/PokemonSearch';

class PokedexContainer extends Component{
    state = {
      query:''
    }

  handleSearchInput = (event) => {
    console.log(event.target.value);
    this.setState({query: event.target.value})
  }

  filteredPokemon = () => {
    if(this.state.query){
      return this.props.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.state.query)
      })
    }else {
      return this.props.pokemons
    }

  }

  createPokemonList = () => {
    return
  }


  render(){
    return(
      <div className="pokedexContainer">
        <div>
          <h1>PokedexContainer</h1>
        </div>

        <div>
          <PokemonSearch
            handleSearchInput={this.handleSearchInput}
            query={this.state.query}/>
        </div>

        <div>
          {this.filteredPokemon().map(pokemon => <PokedexList key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </div>
    )
  }
}
//
export default PokedexContainer;
