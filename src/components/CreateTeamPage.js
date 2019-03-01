import React from 'react';
import BuildPokeTeamPage from './BuildPokeTeamPage';
import database from './../firebase/firebase';

const CreateTeamPage = ({ authId, history }) => {
  const handleAddTeam = (pokeTeam) => {
    database.ref(`/users/${authId}/pokemon`).push(pokeTeam);
  };
 
  return (
    <BuildPokeTeamPage 
      type='create' 
      handleAddTeam={handleAddTeam}
      history={history}
    />
  );
};

export default CreateTeamPage;
