import React from 'react';
import NavBar from './NavBar';
import './../styles/components/Header.css';

const Header = ({ auth, handleLogout }) => (
  <header className='header'> 
    <div className='header__banner'>
      <img src='../images/banner.jpg' alt='banner' className='header__img'/>
    </div>
    <h1 className='header__heading'>POKEMON TEAM BUILDER</h1>
    {!!auth && <NavBar handleLogout={handleLogout} />}
  </header>
);

export default Header;
