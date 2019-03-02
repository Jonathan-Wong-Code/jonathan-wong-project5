import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// https://tylermcginnis.com/react-router-pass-props-to-components/
// For prop rendering
const PrivateRoute = ({ authId, component : Component, ...rest}) => { 
  return !!authId ? (
      <Route {...rest} 
        render = { (props) => <Component {...props} authId={authId} /> }    
      />
    ) : (
      <Redirect to='/'/>
    )  
}

export default PrivateRoute;



  
