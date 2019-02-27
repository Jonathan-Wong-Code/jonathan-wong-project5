import React from 'react';
import pokeapi from './../apis/pokeapi';
import Header from './Header.js';
import PokeList from './PokeList';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textFilter : '',
      typeFilter : '',
      pokemon : [],
      filteredPokemon : [],
      selectedPokemon : {}
    };
  }

  async componentDidMount() {
    const response = await pokeapi.get('/pokemon');
    this.setState({ pokemon : response.data.results });
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

  // handlePokeTypeSearch = async (type) => {
  //   if(type !=='all') {
  //     const response = await pokeapi.get(`/type/${type}`);
  //     const normalizedPokemon = response.data.pokemon.map(pokemon => {
  //         return pokemon.pokemon;
  //     })
  //     this.setState({ pokemon : normalizedPokemon });
  //   } else {
  //     const response = await pokeapi.get('/pokemon');
  //     this.setState({ pokemon : response.data.results });
  //   }
    
  // }

  render() {
    if(!this.state.pokemon) return <div />
    return (
      <React.Fragment>
        <Header />
        <SearchBar 
          handlePokeNameSearch = {this.handlePokeNameSearch}
          handlePokeTypeSearch = {this.handlePokeTypeSearch}
        />
        
      <PokeList pokemon ={this.state.pokemon} textFilter ={this.state.textFilter}/>

      </React.Fragment>
    );
  }
}

export default App;
