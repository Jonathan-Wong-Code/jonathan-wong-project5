import React from 'react';
import database from './../firebase/firebase';
import SavedTeamsList from './SavedTeamsList';

class SavedTeamsPage extends React.Component {
  _isMounted = false;
  constructor() {
    super();

    this.state = {
      savedTeams : {}
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    database.ref(`users/${this.props.authId}/pokemon`).on('value', (response) => {
      const teamList = {};
      response.forEach(team => {
        teamList[team.key] = ({
          ...team.val(),
          id : team.key
        });
      });
      if(this._isMounted){
        this.setState({ savedTeams : teamList });
      }
    });
  }


  componentWillUnmount() {
    this._isMounted = false;
    database.ref().off();
  }

  handleRemoveTeam = (id) => {
    // this.setState((prevState) => {
    //   const newObj = Object.assign({}, prevState.savedTeams);
    //   delete newObj[id]
    //   return {
    //     savedTeams : newObj
    //   }
    // });
    database.ref(`users/${this.props.authId}/pokemon/${id}`).remove();
  }
  
  render() {
    return (
      <div className="saved-teams-page">
        <h1>My Saved Teams</h1>
        <SavedTeamsList 
          savedTeams={this.state.savedTeams} 
          handleRemoveTeam={this.handleRemoveTeam}
        />
      </div>
    );
  }
}

export default SavedTeamsPage;
