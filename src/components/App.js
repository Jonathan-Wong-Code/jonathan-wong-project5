import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CreateTeamPage from './CreateTeamPage';
import SavedTeamsPage from './SavedTeamsPage';
import Header from './Header';
import EditTeamPage from './EditTeamPage';
import { firebase, googleAuthProvider } from './../firebase/firebase';
import LoginPage from './LoginPage';
import PrivateRoute from './../routes/PrivateRoute';
import PublicRoute from './../routes/PublicRoute';

const history = createHistory();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      auth : null
    };
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user)=> {
      if(user) {    
        this.setState({ auth : user.uid });
        if(history.location.pathname ==='/') {
          history.push('/create');
        }
      } else {
        this.setState({ auth : null});
        history.push('/');
      }
    });
  }

  handleLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }

  handleLoginGuest = () => {
    this.setState({ auth : 'guest' });
    history.push('/create');
  }

  handleLogout = () => {
    firebase.auth().signOut();
    history.push('/');
  }
  
  // https://tylermcginnis.com/react-router-pass-props-to-components/
  // For prop rendering
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          {this.state.auth && <Header auth={this.state.auth} handleLogout={this.handleLogout}/>}
          <Switch>
            <PublicRoute 
              path='/' 
              component={LoginPage} 
              handleLogin={this.handleLogin}
              handleLoginGuest={this.handleLoginGuest} 
              authId={this.state.authId}
              exact
            />

            <PrivateRoute path='/create' component={CreateTeamPage} authId ={this.state.auth} />
            <PrivateRoute path='/SavedTeams' component={SavedTeamsPage} authId ={this.state.auth} />
            <PrivateRoute path='/edit/:id' component={EditTeamPage} authId ={this.state.auth} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

//Question UX - Clicking on buttons taking you right to the page.
//Fixing memory leaks
