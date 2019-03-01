import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CreateTeamPage from './CreateTeamPage';
import SavedTeamsPage from './SavedTeamsPage';
import Header from './Header';
import EditTeamPage from './EditTeamPage';
import { firebase, googleAuthProvider } from './../firebase/firebase';
import LoginPage from './LoginPage';

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
        console.log('login');
        
        this.setState({ auth : user.uid });
        console.log(this.state.auth);
        if(history.location.pathname ==='/') {
          history.push('/create');
        }
      } else {
        this.setState({ auth : null});
        console.log(this.state.auth);
        console.log('logout');
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
          <Header auth={this.state.auth} handleLogout={this.handleLogout}/>
          <Switch>
            <Route path='/' 
              render= {
                (props) =>  
                <LoginPage {...props} 
                  handleLogin={this.handleLogin}
                  handleLoginGuest={this.handleLoginGuest} 
                />
              }
              exact 
            />
            <Route path='/create' 
              render = {
                (props) =>
                  <CreateTeamPage {...props}
                    authId ={this.state.auth}
                  />
              }
            />

            <Route path='/SavedTeams' render = {
                (props) =>
                  <SavedTeamsPage {...props}
                    authId ={this.state.auth}
                />
              } 
            />

            <Route path='/edit/:id' render = {
                (props) =>
                  <EditTeamPage {...props}
                    authId ={this.state.auth}
                />
              } 
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
