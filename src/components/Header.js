import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header> 
    <h1>POKEMON TEAM BUILDER</h1>
    <nav>
      <ul>

     
        <li>
          <NavLink 
            to={{
              pathname : '/',
              state : {
                type : 'create'
              }
            }} 
            activeClassName='is-active'
          > 
            Create Team
          </NavLink>
          <NavLink to='/SavedTeams' activeClassName='is-active'>Saved Teams</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;