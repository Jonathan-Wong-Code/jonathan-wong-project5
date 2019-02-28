import React from 'react';

const PokeTeamList = () => {
  return (
    <section className='team-list'>
      <div className='team-member'>
        <div className='team-member__img-box'>
          <img src='https://www.fillmurray.com/200/300' alt='' className='team-member__img'/>
        </div>
        <div className='team-member__content'>
          <h2 className='team-member__name'>Name</h2>
          <div className='team-member__types'>
            <p>Poison</p><p>Water</p>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default PokeTeamList;
