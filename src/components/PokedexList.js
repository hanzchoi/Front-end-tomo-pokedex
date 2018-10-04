import React, { Component } from 'react';
//import Pokemon from './Pokemon'

class PokedexList extends Component{

  render(){
    return(
      <div className="pokemon">
        <img src={this.props.pokemon.spriteImg}/>
        <p className="pokemon-name">{this.props.pokemon.name}</p>
      </div>

    )
  }
}

export default PokedexList
