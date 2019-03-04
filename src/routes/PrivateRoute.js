import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from'../components/Header';
// https://tylermcginnis.com/react-router-pass-props-to-components/
// For prop rendering
const PrivateRoute = ({ authId, component : Component,  handleLogout, ...rest}) => { 
  return !!authId ? (
      <Route {...rest} 
        render = { (props) => 
          <div className='header-component-box'>
            <Header auth={authId} handleLogout={handleLogout} />
            <Component {...props} authId={authId} />
          </div> 
        }    
      />
    ) : (
      <Redirect to='/'/>
    )  
}

export default PrivateRoute;



  
