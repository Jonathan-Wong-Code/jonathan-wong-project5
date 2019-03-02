import React from 'react';
import './../styles/components/PokemonTypes.css';

const PokemonTypes = ({ type }) => {
  return (
    <span className={`pokemon-type pokemon-type--${type.type.name}`} key={type.type.name}>     
      {type.type.name}
    </span>
  );
};

export default PokemonTypes;
