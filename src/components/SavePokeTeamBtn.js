import React from 'react';

const SavePokeTeamBtn = ({ toggleModal, type }) => {
  const onButtonClick = () => {
    toggleModal();
  };

  return (
    <button onClick={onButtonClick} className='save-team__btn'>
      {type === 'create' ? 'Save Team' : 'Edit Team'}
    </button>
  );
};

export default SavePokeTeamBtn;
