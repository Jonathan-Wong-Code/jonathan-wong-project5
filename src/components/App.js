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
    this.setState({ auth : null });
    firebase.auth().signOut();
    history.push('/');
  }
  
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Header auth={this.state.auth} handleLogout={this.handleLogout}/>
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
            <PrivateRoute path='/edit/:id' component={EditTeamPage} authId={this.state.auth} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

//Question UX - Clicking on buttons taking you right to the page.
//Fixing memory leaks
//Deleting on saved teams page via firebase? or from state and firebase.
//How to get spaces between words when rendering with jsx?

// warning: can't perform a react state update on an unmounted component. this is a no-op, but it indicates a memory leak in your application. to fix, cancel all subscriptions and asynchronous tasks in the componentwillunmount method.
