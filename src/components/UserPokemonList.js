import React, { Component } from 'react';

class UserPokemonList extends Component{

  render(){
    //console.log(this.props);
    const {name, type, img, spriteImg, description} = this.props.userPokemon

    return(
      <div>
        <h1>{name}</h1>
        <img src={spriteImg} alt={name} />

      </div>
    )
  }
}
//<h2>{type.length === 2 ? `${type[0]}/${type[1]}` : type }</h2>
//<img src={img} alt={name} />
//<p>{description}</p>
export default UserPokemonList;

//
