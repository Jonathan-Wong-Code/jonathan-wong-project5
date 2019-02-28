import React from 'react';
import './../styles/components/EmptyTeamListItem.css';

const EmptyTeamListItem = ({ index }) => {
  return (
    <div className='empty-item'>
      <p className='empty-item__text'>
        Team member #{index}
      </p>
    </div>
  );
};

export default EmptyTeamListItem; 

