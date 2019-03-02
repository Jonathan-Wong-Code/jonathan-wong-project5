import React from 'react';
import './../styles/components/PokemonTypes.css';

const PokemonTypes = ({ type }) => {
  return (
    <li className={`pokemon-type pokemon-type--${type.type.name}`} key={type.type.name}>     
      {type.type.name}
    </li>
  );
};

export default PokemonTypes;
