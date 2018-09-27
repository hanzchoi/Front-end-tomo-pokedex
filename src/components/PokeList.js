import React, { Component } from 'react';
import Pokemon from './Pokemon'

class PokeList extends Component{



  render(){
    //console.log(this.props.pokemons)
    return(
      <div>
        {this.createPokemon()}
      </div>
    )
  }
}

export default PokeList
