import React from 'react';
import PokeCard from './PokeCard';
import Modal from './Modal';
import './../styles/components/PokeList.css';

class PokeList extends React.Component { 
  constructor() {
    super();
    this.pokeModal = React.createRef();

    this.state = {
      showModal : false,
      currentPokemon : null,
      error : ''
    };
  } 

  componentDidMount = () => {
    console.log(this.pokeModal.current)
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

  handleSetFocus = (pokeModal) => {
    pokeModal.focus();
  }

  handlePokeCardClick = (currentPokemon) => {
    this.setState({ currentPokemon });
    this.setState({ showModal : true });
  }

  handleModalCancel = () => {
    this.setState({ currentPokemon : null });
  }

  handleAddPokemon = () => {
    if(this.props.currentPokemonTeam.length < 6){
      this.props.handleAddPokemon(this.state.currentPokemon);
      this.setState({ currentPokemon : null});
    } else {
      this.setState({ error : 'Team full! Remove a member' });
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
          handleSetFocus={this.handleSetFocus}
        /> 
      }
      </React.Fragment>
    )
  }
};

export default PokeList;