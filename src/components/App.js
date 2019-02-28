import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import CreateTeamPage from './CreateTeamPage';
import SavedTeamsPage from './SavedTeamsPage';
import Header from './Header';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const App = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' component={CreateTeamPage} exact />
          <Route path='/SavedTeams' component={SavedTeamsPage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
