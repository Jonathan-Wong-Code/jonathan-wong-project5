import React from 'react';
import pokeapi from './../apis/pokeapi';
import Header from './Header.js';
import PokeList from './PokeList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters : {},
      Pokemon : [],
      selectedPokemon : {}
    };
  }

  async componentDidMount() {
    const response = await pokeapi.get('/pokemon');
    this.setState({ Pokemon : response.data.results });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* // filterbar and search bar....send a setstate for filtering */}
        <PokeList pokemon ={this.state.Pokemon}/>
      </React.Fragment>
    );
  }
}

export default App;
