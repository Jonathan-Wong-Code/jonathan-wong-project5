import React from 'react';
import database from './../firebase/firebase';
import BuildPokeTeamPage from './BuildPokeTeamPage'

class EditTeamPage extends React.Component {
  constructor() {
    super();
    this.state = {
      editedPokeTeam : null
    }
  }

  async componentDidMount() {
    const response = await database.ref(`pokemon/${this.props.match.params.id}`).once('value');
    await this.setState({ editedPokeTeam : response.val() })
  }
  
  handleEditTeam = (pokeTeam) => {
    database.ref(`pokemon/${this.props.match.params.id}`).update(pokeTeam)
  }

  render() {
    if(!this.state.editedPokeTeam) return <div />
    return (
      <BuildPokeTeamPage 
        type={'edit'} 
        handleEditTeam={this.handleEditTeam} 
        pokeTeam={this.state.editedPokeTeam}
        history = {this.props.history}
      />
    )
  }
}

export default EditTeamPage;
