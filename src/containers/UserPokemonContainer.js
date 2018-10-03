import React, { Component } from 'react';
import UserPokemonList from '../components/UserPokemonList';

class UserPokemonContainer extends Component{

  rednerUserPokemon = () => {
    return this.props.userPokemons.map(userPokemon =>
      <UserPokemonList key={userPokemon.id} userPokemon={userPokemon}/>)
  }
  render(){

    return(
      <div className="personalPokemonContainer">
        <h1>PersonalPokemonContainer</h1>
        {this.rednerUserPokemon()}
      </div>
    )
  }

}

export default UserPokemonContainer;
