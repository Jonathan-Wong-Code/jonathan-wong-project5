import React from 'react';
import SavedTeamCell from './SavedTeamsCell';
import './../styles/components/SavedTeamsList.css';

const SavedTeamsList = ({ savedTeams, handleRemoveTeam }) => {
  const savedTeamsArray = Object.values(savedTeams)
  const renderTeamCell = () => savedTeamsArray.map(team => {
    return (
      <SavedTeamCell 
        key={team.id} 
        team={team} 
        handleRemoveTeam={handleRemoveTeam}
      />
    );
  });

  return (
    <div className='saved-teams'>
      <ul className='saved-teams__list'>
        {renderTeamCell()}
      </ul>
    </div> 
  );
};

export default SavedTeamsList;
