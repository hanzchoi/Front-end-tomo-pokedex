import React, { Component } from 'react'

const Pokemon = (props) => {
  const {name, type, img, description} = props.pokemon

  return(
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{description}</p>
    </div>
  )
}
// <h2>{ type.length === 2 ? `${type[0]}/${type[1]}` : type }</h2>
export default Pokemon;
