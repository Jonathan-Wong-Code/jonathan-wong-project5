import React from 'react';
import PokeCard from './PokeCard';
import './../styles/components/PokeList.css';
class PokeList extends React.Component { 
  constructor() {
    super();
    this.state = {
      selectedPokemon : false
    };
  }

  renderPokemon = () => {
    const filteredPokemon = this.props.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.props.textFilter.toLowerCase());
    })

    return (
      filteredPokemon.map(pokemon => (
        <PokeCard key={pokemon.name} pokemon={pokemon} handleClick={this.handleClick} />
      ))    
    ) 
  }

  handleClick = () => {
    this.setState({ selectedPokemon : true});
    console.log(this.state.selectedPokemon);
  }

  render() {
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