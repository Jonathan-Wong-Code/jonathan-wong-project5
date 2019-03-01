import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ auth, handleLogout }) => (
  
  <header> 
    <h1>POKEMON TEAM BUILDER</h1>
    <nav>
      <ul>
        <li>
          <NavLink to='/create' activeClassName='is-active'>
            Create Team
          </NavLink>
        </li>
        <li>
          <NavLink to='/SavedTeams' activeClassName='is-active'>
            Saved Teams
          </NavLink>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
