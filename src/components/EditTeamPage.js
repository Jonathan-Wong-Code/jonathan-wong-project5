import React from 'react';
import database from './../firebase/firebase';
import BuildPokeTeamPage from './BuildPokeTeamPage'

class EditTeamPage extends React.Component {
  
  //Fixing memory leak on async setState calls
  // https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      editedPokeTeam : null,
    }
  }

  componentDidMount() {
    this._isMounted = true;
   
    database.ref(`users/${this.props.authId}/pokemon/${this.props.match.params.id}`).once('value', (response) => {
      if(this._isMounted) {
        this.setState({ editedPokeTeam : response.val() })
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  handleEditTeam = (pokeTeam) => {
    database.ref(`users/${this.props.authId}/pokemon/${this.props.match.params.id}`).update(pokeTeam);
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
