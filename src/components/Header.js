import React from 'react';
import NavBar from './NavBar';
import './../styles/components/Header.css';
import logo from './../images/logo.png';
import pikachu from './../images/pikachu.png';
import squirtle from './../images/squirtle.png';
import bulbasaur from './../images/bulbasaur.png';
import charmander from './../images/charmander.png';
import eevee from './../images/eevee.png';
import togepi from './../images/togepi.png';


const Header = ({ auth, handleLogout }) => {
  const headerClasses = !!auth ? 'header' : 'header header--login';
  const headingClasses = !!auth ? 'header__heading' : 'header__heading header__heading--login';
  const pokeBannerClasses = !!auth ? 'poke-banner' : 'poke-banner poke-banner--login';
  
  return (
    <header className={headerClasses}> 
      <ul className={pokeBannerClasses}>
        <li className='poke-banner__item'>
          <img src={togepi} alt='togepi' className='poke-banner__img' />
        </li>

        <li className='poke-banner__item'>
          <img src={pikachu} alt='pikachu' className='poke-banner__img' />
        </li>

        <li className='poke-banner__item'>
          <img src={squirtle} alt='squirtle' className='poke-banner__img' />
        </li>

        <li className='poke-banner__item poke-banner__logo'>
          <img src={logo} alt='pokemon logo' className='poke-banner__img' />
        </li>

        <li className='poke-banner__item'>
          <img src={eevee} alt='eevee' className='poke-banner__img' />
        </li>

        <li className='poke-banner__item'>
          <img src={charmander} alt='charmander' className='poke-banner__img' />
        </li>
        
        <li className='poke-banner__item'>
          <img src={bulbasaur} alt='bulbasaur' className='poke-banner__img' />
        </li>
      </ul>
      <h1 className={headingClasses}>Pokemon Teambuilder</h1>
      {!!auth && <NavBar handleLogout={handleLogout} />}
    </header>
  );
};

export default Header;
