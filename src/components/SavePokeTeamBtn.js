import React from 'react';
import './../styles/components/SavePokeTeamBtn.css';

const SavePokeTeamBtn = ({ toggleModal, type, pokeTeam }) => {
  const onButtonClick = () => {
    toggleModal();
  };

  const disabledStatus = pokeTeam.length < 6 ? true : false;

  return (
    <div className='save-team'>
      <button onClick={onButtonClick} className='save-team__btn btn' disabled={disabledStatus}>
        {type === 'create' ? 'Save Team' : 'Edit Team'}
      </button>
      <p>Select 6 Pokemon to save your team. Currently {pokeTeam.length}/6.</p>
    </div>
  );
};

export default SavePokeTeamBtn;
