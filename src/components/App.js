import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CreateTeamPage from './CreateTeamPage';
import SavedTeamsPage from './SavedTeamsPage';
import Header from './Header';
import EditTeamPage from './EditTeamPage';

const history = createHistory();

const App = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' component={CreateTeamPage} exact />
          <Route path='/SavedTeams' component={SavedTeamsPage} />
          <Route path='/edit/:id' component={CreateTeamPage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
