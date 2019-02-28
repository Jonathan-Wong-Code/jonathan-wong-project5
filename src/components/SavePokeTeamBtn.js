import React from 'react';

const SavePokeTeamBtn = ({ toggleModal }) => {
  const onButtonClick = () => {
    toggleModal();
  };

  return (
    <button onClick={onButtonClick} className='save-team__btn'>
      Save Team
    </button>
  );
};

export default SavePokeTeamBtn;
