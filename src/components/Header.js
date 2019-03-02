import React from 'react';
import NavBar from './NavBar';

const Header = ({ auth, handleLogout }) => (
  <header> 
    <h1>POKEMON TEAM BUILDER</h1>
    {!!auth && <NavBar handleLogout={handleLogout} />}
  </header>
);

export default Header;
