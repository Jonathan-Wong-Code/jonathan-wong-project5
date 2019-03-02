import React from 'react';
import './../styles/components/Modal.css';
import PokemonTypes from './PokemonTypes';

const Modal = ({ pokemon, handleModalCancel, renderButtons, error }) => {
  const renderTypes = () => pokemon.types.map(type => {
    return <PokemonTypes type={type} key={type.type.name} />;
  });
  
  const renderAbilities = () => pokemon.abilities.map(ability => {
    return (
      <span 
        className='modal__ability' 
        key={ability.ability.name}
      > 
        {ability.ability.name} </span>    
    );
  });

  const renderStats = () => pokemon.stats.map(stat => (
    <li key={stat.stat.url}>
      <span className='modal__stat-name'>
        { stat.stat.name }:
      </span> {stat.base_stat}
    </li>
  ));

  return (
    <div className='modal__background' onClick={handleModalCancel}>
      <div className='modal__body' onClick={(e) => e.stopPropagation()}>
        <div className='modal__img-box'>
          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            className='modal__img'
          />
        </div>
        <h1>{pokemon.name}</h1>
        <ul className='modal__attributes'>
          <li className='modal__types'>
            <span className='modal__stat-name'>type: </span>
          </li>
    
          <li className='modal__abilities'>
            <span className='modal__stat-name'>abilities: </span>
            {renderAbilities()}
          </li>

          <li className='modal__stats'>
            <ul>{renderStats()}</ul>
          </li>
        </ul>
        {error && <p>{error}</p>}
        {renderButtons()}
      </div>
    </div>   
  );
};

export default Modal;
