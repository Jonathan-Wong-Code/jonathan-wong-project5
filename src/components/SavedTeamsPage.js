import React from 'react';
import database from './../firebase/firebase';
import SavedTeamsList from './SavedTeamsList';

class SavedTeamsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      savedTeams : {}
    };
  }

  async componentDidMount() {
    database.ref('pokemon').on('value', (response) => {
      const teamList = {};
      response.forEach(team => {
        teamList[team.key] = ({
          ...team.val(),
          id : team.key
        });
      });
      this.setState({ savedTeams : teamList });
    });
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.savedTeams)

  }
  
  handleRemoveTeam = (id) => {
    // this.setState((prevState) => {
    //   delete prevState[id]
    //   return {
    //     savedTeams : prevState
    //   }
    // });
    database.ref(`pokemon/${id}`).remove();
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
