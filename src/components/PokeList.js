import React from 'react';
import PokeCard from './PokeCard';
import Modal from './Modal';
import './../styles/components/PokeList.css';

class PokeList extends React.Component { 
  constructor() {
    super();
    this.state = {
      showModal : false,
      currentPokemon : null,
      error : ''
    };
  } 

  setPokemon = (currentPokemon) => {
    this.setState({ currentPokemon });
  }

  renderPokemon = () => {
    const filteredPokemon = this.props.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.props.textFilter.toLowerCase());
    })

    return (
      filteredPokemon.map(pokemon => (
        <PokeCard 
          key={pokemon.name} 
          pokemon={pokemon} 
          handlePokeCardClick={this.handlePokeCardClick} 
        />
      ))    
    ) 
  }

  handlePokeCardClick = (currentPokemon) => {
    this.setState({ currentPokemon });
    this.setState({ showModal : true });
  }

  handleModalCancel = () => {
    this.setState({ currentPokemon : null });
  }

  handleAddPokemon = () => {
      if(Object.values(this.props.currentPokemonTeam).length < 6){
        this.props.handleAddPokemon(this.state.currentPokemon);
        this.setState({ currentPokemon : null});
      } else {
        this.setState({ error : 'Your team is full. Remove a team member' });
      }    
  }

  render() {
    return (
      <React.Fragment>
        <div className="poke-list">
            <ul className="poke-list__grid">
              {this.renderPokemon()}
            </ul>
        </div>
      { 
        this.state.currentPokemon && 
        <Modal 
          pokemon={this.state.currentPokemon}
          handleModalCancel={this.handleModalCancel}
          handleAddPokemon={this.handleAddPokemon}
          error={this.state.error}
        /> 
      }
      </React.Fragment>
      
    )
  }
};

export default PokeList;