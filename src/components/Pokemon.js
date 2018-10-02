import React, { Fragment } from 'react'

const Pokemon = (props) => {
  const {name, type, img, description} = props.pokemon

  return(
    <Fragment>
      <h1>{name}</h1>
      <h2>{ type.length === 2 ? `${type[0]}/${type[1]}` : type }</h2>
      <img src={img} alt={name} />
      <p>{description}</p>
    </Fragment>
  )
}

export default Pokemon;
