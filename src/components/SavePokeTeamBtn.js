import React from 'react';
import database from './../firebase/firebase';

const SavePokeTeamBtn = ({ currentPokemonTeam }) => {
 
  const onButtonClick = () => {
    console.log(currentPokemonTeam);
    console.log('click');
    database.ref('pokemon').push(currentPokemonTeam);
  };

  return (
    <button onClick={onButtonClick} className="save-team__btn">
      Save Team
    </button>
  );
};

export default SavePokeTeamBtn;

