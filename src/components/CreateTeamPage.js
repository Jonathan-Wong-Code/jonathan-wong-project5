import React from 'react';
import BuildPokeTeamPage from './BuildPokeTeamPage';
import database from './../firebase/firebase';
class CreateTeamPage extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  handleAddTeam = (pokeTeam) => {
    database.ref('pokemon').push(pokeTeam);
  }

  render() {
    return (
      <BuildPokeTeamPage 
        type='create' 
        handleAddTeam={this.handleAddTeam}
        history = {this.props.history}
      />
    );
  }
}

export default CreateTeamPage;