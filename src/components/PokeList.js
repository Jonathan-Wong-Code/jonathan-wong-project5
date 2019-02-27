import React from 'react';
import PokeCard from './PokeCard';
import './../styles/PokeList.css';
class PokeList extends React.Component { 
  constructor() {
    super();

    this.state = {
      selectedPokemon : false
    };
  }

  renderPokemon = () => {
    return (
      this.props.pokemon.map(pokemon => (
        <PokeCard key={pokemon.id} pokemon={pokemon} handleClick={this.handleClick} />
      ))    
    ) 
  }

  handleClick = () => {
    this.setState({ selectedPokemon : true});
    console.log(this.state.selectedPokemon);
  }

  render() {
    console.log(this.props);
    return (
      <div className="poke-list">
        <ul className="poke-list__grid">
          {this.renderPokemon()}
        </ul>
      </div>
    )
  }
};

export default PokeList;