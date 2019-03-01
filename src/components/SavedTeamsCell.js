import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './../styles/components/SavedTeamCell.css';

const SavedTeamsCell = ({ team, handleRemoveTeam }) => {
  console.log(team);
  const renderPokemonImg = () => {
    return team.pokemon.map(pokemon => {
      return (
        <li key={pokemon.uniqueId} className='team-cell__img-item'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </li>
      );
    });
  };

  const onDeleteClick = () => {
    handleRemoveTeam(team.id);
  };

  return (
    <li className='team-cell'>
      <ul className='team-cell__img-list'>
        {renderPokemonImg()}
      </ul>

      <h2 className='team-cell__heading'>{team.name}</h2>
      <p className='team-cell__createdAt'>
        Created: {moment(team.createdAt).format('MMM do YYYY')}
      </p>
      <p className='team-cell__description'>{team.description}</p>
      <div className='team-cell__buttons'>
        <Link to={{
          pathname : '/edit/:id',
          state : { type : 'edit' }
        }}
        >   
        Edit
        </Link>
        <button onClick={onDeleteClick}>Delete</button>
      </div>
    </li>
  );
};  

export default SavedTeamsCell;
