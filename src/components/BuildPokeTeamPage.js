import React from 'react';
import database from '../firebase/firebase';
import uuid from 'uuid';
import moment from 'moment';
import pokeapi from '../apis/pokeapi';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import PokeTeamList from './PokeTeamList';
import SaveTeamListBtn from './SavePokeTeamBtn'
import SavePokeTeamModal from './SavePokeTeamModal';

class BuildPokeTeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFilter : '',
      typeFilter : '',
      pokemon : [],
      currentPokemonTeam : this.props.pokeTeam ? this.props.pokeTeam.pokemon : [],
      pokemonTeamToSave : {},
      showSaveModal : false,
    };
  }

  // https://tylermcginnis.com/react-router-pass-props-to-link/ Passing state through link
  async componentDidMount() {
    console.log(this.props);
    const response = await pokeapi.get('/pokemon');
    this.setState({ pokemon : response.data.results });
    // this.setState({ pageType : this.props.location.state.type })
  }

  toggleModal = () => {
    this.setState((prevState)=> ({
      showSaveModal : !prevState.showSaveModal
    }));
  }

  handleSaveTeam = (name, description) => {
    const newTeamObj = {
      pokemon : this.state.currentPokemonTeam,
      name,
      description,
      createdAt : this.props.pokeTeam? this.props.pokeTeam.createdAt : moment().valueOf()
    }
    //This would save or edit my function in parent component.
    if(this.props.type ==='create') {
      this.props.handleAddTeam(newTeamObj);
    } else {
      this.props.handleEditTeam(newTeamObj);
    }
  }

  handleAddPokemon = (pokemon) => {
    const uniqueId = uuid();
  
    this.setState((prevState) => ({
      currentPokemonTeam : [...prevState.currentPokemonTeam, {
        uniqueId,
        ...pokemon
      }]
    }));
  }

  handleRemovePokemon = (id) => {
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

  renderHeading = () => (
    this.props.pokeTeam ? `Editing Team: ${this.props.pokeTeam.name}` : `Create Team`
  )

  render() {
    if(!this.state.pokemon) return <div />
    return (
      <React.Fragment>
        <h2 className='build-page__heading'>{this.renderHeading()}</h2>
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
            history={this.props.history}
            pokeTeam = {this.props.pokeTeam ? this.props.pokeTeam : null}
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

export default BuildPokeTeamPage;
