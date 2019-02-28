import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateTeamPage from './CreateTeamPage';
import SavedTeamsPage from './SavedTeamsPage';
import Header from './Header';
const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' component={CreateTeamPage} exact />
          <Route path='/SavedTeams' component={SavedTeamsPage} />
        </Switch>
      </React.Fragment>
    
    </BrowserRouter>
  );
};

export default App;
