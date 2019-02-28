import React from 'react';
import uuid from 'uuid';
import pokeapi from './../apis/pokeapi';
import Header from './Header.js';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import PokeTeamList from './PokeTeamList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textFilter : '',
      typeFilter : '',
      pokemon : [],
      currentPokemonTeam : {}
    };
  }

  async componentDidMount() {
    const response = await pokeapi.get('/pokemon');
    this.setState({ pokemon : response.data.results });
  }

  handleAddPokemon = (pokemon) => {
    const uniqueId = uuid();
    this.setState((prevState) => ({
      currentPokemonTeam : {...prevState.currentPokemonTeam,  
        [uniqueId] : {
          ...pokemon,
          uniqueId
        }
      }
    }));
  }

  handleRemovePokemon = (id) => {
    this.setState((prevState) => {
        delete prevState.currentPokemonTeam[id]
        return {
          currentPokemonTeam : prevState.currentPokemonTeam
        }
    });
  }
 
  handlePokeNameSearch = async (textFilter, type) => {
    if(type !=='all') {
      const response = await pokeapi.get(`/type/${type}`);
      const normalizedPokemon = response.data.pokemon.map(pokemon => {
          return pokemon.pokemon;
      })
      this.setState({ pokemon : normalizedPokemon });
    } else {
      const response = await pokeapi.get('/pokemon');
      this.setState({ pokemon : response.data.results });
    }
    this.setState({ textFilter })
  }

  render() {
    if(!this.state.pokemon) return <div />
    return (
      <React.Fragment>
        <Header />
        <PokeTeamList 
          pokeTeam ={this.state.currentPokemonTeam}
          handleRemovePokemon = {this.handleRemovePokemon}
        />
        <SearchBar 
          handlePokeNameSearch = {this.handlePokeNameSearch}
          handlePokeTypeSearch = {this.handlePokeTypeSearch}
        />
        
      <PokeList 
        pokemon ={this.state.pokemon} 
        textFilter ={this.state.textFilter}
        type = 'create'
        handleAddPokemon = {this.handleAddPokemon}
        currentPokemonTeam = {this.state.currentPokemonTeam}
      />

      </React.Fragment>
    );
  }
}

export default App;
