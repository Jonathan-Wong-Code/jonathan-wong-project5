import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ handleLogout }) => {
  return (
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
  );  
};

export default NavBar;


