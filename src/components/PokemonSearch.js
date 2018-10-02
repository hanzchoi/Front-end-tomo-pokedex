import React from 'react';

const PokemonSearch = (props) => (
  <div>
    <input type="text"
      value={props.query}
      onChange={props.handleSearchInput}

      placeholder="Enter pokemon name..." />
  </div>
)
export default PokemonSearch;
