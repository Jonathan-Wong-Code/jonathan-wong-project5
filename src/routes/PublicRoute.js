import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ authId, handleLogin, handleLoginGuest , component : Component, ...rest}) => { 
  return !!authId ? (
      <Redirect to='/create'/>
    ) : (
       <Route {...rest} 
        render = { (props) => 
          <Component {...props} 
            handleLogin={handleLogin}
            handleLoginGuest={handleLoginGuest} 
            exact
          /> 
        } 
      />
    )   
  }

export default PublicRoute;

