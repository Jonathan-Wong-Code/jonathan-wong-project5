import React from 'react';
import database from './../firebase/firebase';
import SavedTeamsList from './SavedTeamsList';
import './../styles/components/SavedTeamsPage.css';
class SavedTeamsPage extends React.Component {
  //Fixing memory leak on async setState calls using _isMounted
  // https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/
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
    database.ref(`users/${this.props.authId}/pokemon/${id}`).remove();
  }
  
  renderResults = () => {
    return Object.values(this.state.savedTeams).length === 0 ? (
        <p className="saved-teams__error">No Teams Saved</p>    
    ) : (
      <SavedTeamsList 
        savedTeams={this.state.savedTeams} 
        handleRemoveTeam={this.handleRemoveTeam}
      />  
    )
  }

  render() {
    return (
      <section className='saved-teams-section'>
        <h2 className='saved-teams-section__heading'>My Saved Teams</h2>
        {this.renderResults()}
      </section>
    );
  }
}

export default SavedTeamsPage;
