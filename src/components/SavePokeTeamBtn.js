import React from 'react';
import './../styles/components/SavePokeTeamBtn.css';

const SavePokeTeamBtn = ({ toggleModal, type }) => {
  const onButtonClick = () => {
    toggleModal();
  };

  return (
    <div className='save-team'>
      <button onClick={onButtonClick} className='save-team__btn btn'>
        {type === 'create' ? 'Save Team' : 'Edit Team'}
      </button>
    </div>
  );
};

export default SavePokeTeamBtn;
