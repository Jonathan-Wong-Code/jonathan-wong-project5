import React from 'react';

class SavedTeamsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      displayTeam : false
    };
  }

  render() {
    return (
      <h1>My Saved Teams</h1>
    );
  }
}

export default SavedTeamsPage;
