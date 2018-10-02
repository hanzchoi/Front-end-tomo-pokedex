import React, { Component } from 'react';
//import Pokemon from './Pokemon'

class PokedexList extends Component{

  render(){
    return(
      <span className="pokemon">
        <img src={this.props.pokemon.spriteImg}/>
        <p className="pokemon-name">{this.props.pokemon.name}</p>
      </span>

    )
  }
}

export default PokedexList
