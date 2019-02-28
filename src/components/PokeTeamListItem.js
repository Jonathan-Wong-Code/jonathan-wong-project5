import React from 'react';

const PokeTeamListItem = ({ pokemon, handleRemovePokemon }) => {

  const onButtonClick = () => {
    handleRemovePokemon(pokemon.uniqueId);
  };

  return (
    <li className='team-member'>
      <div className='team-member__img-box'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className='team-member__img' />
      </div>
      <div className='team-member__content'>
        <h2 className='team-member__name'>{pokemon.name}</h2>
        <div className='team-member__types'>
          <p>Poison</p><p>Water</p>
        </div>  
      </div>
      <button onClick={onButtonClick}>Remove</button>
    </li>
  );
};

export default PokeTeamListItem;
