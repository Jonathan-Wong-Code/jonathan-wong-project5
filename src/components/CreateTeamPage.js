import React from 'react';
import database from './../firebase/firebase';
import uuid from 'uuid';
import pokeapi from './../apis/pokeapi';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import PokeTeamList from './PokeTeamList';
import SaveTeamListBtn from './SavePokeTeamBtn'
import SavePokeTeamModal from './SavePokeTeamModal';

class CreateTeamPage extends React.Component {
  constructor() {
    super();
    this.state = {
      textFilter : '',
      typeFilter : '',
      pokemon : [],
      currentPokemonTeam : [],
      pokemonTeamToSave : {},
      showSaveModal : false
    };
  }

  async componentDidMount() {
    const response = await pokeapi.get('/pokemon');
    this.setState({ pokemon : response.data.results });
  }

  toggleModal = () => {
    this.setState((prevState)=> ({
      showSaveModal : !prevState.showSaveModal
    }));
  }

  handleSaveTeam = async (name, description) => {
    await this.setState((prevState) => {
      const newTeamObj = {
        pokemon : prevState.currentPokemonTeam,
        name,
        description
      }
      
      return {
        pokemonTeamToSave : newTeamObj
      }
    });
    database.ref('pokemon').push(this.state.pokemonTeamToSave);
  }

  handleAddPokemon = (pokemon) => {
    const uniqueId = uuid();
    // this.setState((prevState) => ({
    //   currentPokemonTeam : {...prevState.currentPokemonTeam,  
    //     [uniqueId] : {
    //       ...pokemon,
    //       uniqueId
    //     }
    //   }
    // }));

    this.setState((prevState) => ({
      currentPokemonTeam : [...prevState.currentPokemonTeam, {
        uniqueId,
        ...pokemon
      }]
    }));
    console.log(this.state.currentPokemonTeam);
  }

  handleRemovePokemon = (id) => {
    // this.setState((prevState) => {
    //     delete prevState.currentPokemonTeam[id]
    //     return {
    //       currentPokemonTeam : prevState.currentPokemonTeam
    //     }
    // });
    this.setState((prevState) => {
      const newState = prevState.currentPokemonTeam
        .filter(pokemon => pokemon.uniqueId !== id)
      return {
        currentPokemonTeam : newState
      }
    })
  }
 
  handlePokeSearch = async (textFilter, type) => {
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
        <PokeTeamList 
          pokeTeam ={this.state.currentPokemonTeam}
          handleRemovePokemon = {this.handleRemovePokemon}
        />


        <SaveTeamListBtn 
          currentPokemonTeam ={this.state.currentPokemonTeam}
          toggleModal={this.toggleModal}
        />  
        {
          this.state.showSaveModal && 
          <SavePokeTeamModal 
            toggleModal={this.toggleModal}
            handleSaveTeam={this.handleSaveTeam}
          />
        }
        <SearchBar 
          handlePokeSearch = {this.handlePokeSearch}
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

export default CreateTeamPage;
