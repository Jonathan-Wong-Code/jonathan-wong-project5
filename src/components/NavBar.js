import React from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/components/NavBar.css';

const NavBar = ({ handleLogout }) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__nav'>
        <li className='navbar__item'>
          <NavLink to='/create' activeClassName='is-active' className='navbar__link btn'>
            Create Team
          </NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to='/SavedTeams' activeClassName='is-active' className='navbar__link btn'>
            Saved Teams
          </NavLink>
        </li>
        <li className='navbar__item'>
          <button onClick={handleLogout} className='btn navbar__logout'>Logout</button>
        </li>
      </ul>
    </nav>
  );  
};

export default NavBar;
