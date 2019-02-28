import React from 'react';
import PokeTeamListItem from './PokeTeamListItem';
import EmptyTeamListItem from './EmptyTeamListItem';
import './../styles/components/PokeTeamList.css';


const PokeTeamList = ({ pokeTeam, handleRemovePokemon }) => {
  const renderPokeTeam = () => {
    const emptySlots = [1, 2, 3, 4, 5, 6];
   
    return pokeTeam.length > 0 ? (
      pokeTeam.map(pokemon => {
        return (
          <PokeTeamListItem 
            key={pokemon.uniqueId} 
            pokemon={pokemon} 
            handleRemovePokemon={handleRemovePokemon}
          />
        );
      })
    ) : (
      emptySlots.map(item => {
        return <EmptyTeamListItem key={item} index={item} />;
      })
    );
  }

  
  //End function

  // return teamArray.map(pokemon => {
  //   return (
  //     <PokeTeamListItem 
  //       key={pokemon.uniqueId} 
  //       pokemon={pokemon} 
  //       handleRemovePokemon={handleRemovePokemon}
  //     />
  //   );
  // });
  
  return (
    <section className='poke-team'>
      <ul className="poke-team__list">
        {renderPokeTeam()}
      </ul>
    </section>
  );
};

export default PokeTeamList;
