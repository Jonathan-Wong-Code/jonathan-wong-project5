import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from'../components/Header';
const PublicRoute = ({ authId, handleLogin, handleLoginGuest , component : Component,handleLogout, ...rest, }) => { 
  return !!authId ? (
      
      <Redirect to='/create'/>
    ) : (
     
       <Route {...rest} 
        render = { (props) => 
          <div className='header-login-box'>
          <Header auth={authId} handleLogout={handleLogout} />
          <Component {...props} 
            handleLogin={handleLogin}
            handleLoginGuest={handleLoginGuest} 
            exact
          /> 
          </div>
        } 
      />
    )   
  }

export default PublicRoute;

