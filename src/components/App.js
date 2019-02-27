import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters : {},
      searchedPokemon : [],
      selectedPokemon : {}
    };
  }

  async componentDidMount() {
    await this.getPokemon('fire');
  }

  getPokemon = async (type) => {
    const searchType = type === 'all' ? 'pokemon' : `type/${type}`;
    const response = await axios(`https://pokeapi.co/api/v2/${searchType}`, {
      params : {
        limit : 151
      }
    });
    console.log(response.data);
  }

  render() {
    return (
      <h1>This is my app</h1>
    );
  }
}

export default App;
