import React from 'react';
import PokeTeamListItem from './PokeTeamListItem';
import './../styles/components/PokeTeamList.css';


const PokeTeamList = ({pokeTeam, handleRemovePokemon}) => {

  const renderPokeTeam = () => {
    const teamArray = Object.values(pokeTeam);
    return teamArray.map(pokemon => {
      return (
        <PokeTeamListItem 
          key={pokemon.uniqueId} 
          pokemon={pokemon} 
          handleRemovePokemon={handleRemovePokemon}
        />
      );
    });
  };
  
  return (
    <section className='poke-team'>
      <ul className="poke-team__list">
        {renderPokeTeam()}
      </ul>
    </section>
  );
};

export default PokeTeamList;
