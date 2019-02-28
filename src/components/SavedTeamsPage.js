import React from 'react';
import database from './../firebase/firebase';
import SavedTeamsList from './SavedTeamsList';

class SavedTeamsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      displayTeam : false,
      savedTeams : ''
    };
  }

  async componentDidMount() {
    database.ref('pokemon').once('value', (response) => {
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
    console.log(this.state.savedTeams);
  }
  
  render() {
    return (
      <div className="saved-teams-page">
        <h1>My Saved Teams</h1>
        <SavedTeamsList savedTeams={this.state.savedTeams} />
      </div>
    );
  }
}

export default SavedTeamsPage;
