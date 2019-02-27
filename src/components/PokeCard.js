import React from 'react';
import axios from 'axios';
class PokeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemon : null
    }
  }
  
  async componentDidMount() {
    const response = await axios.get(`${this.props.pokemon.url}`);
    await this.setState({ currentPokemon : response.data });
    console.log(this.state.currentPokemon.sprites.front_default);
  }
  
  render() {
    if (!this.state.currentPokemon) return <div />
    return (
      <li onClick={this.props.handleClick} tabIndex='0' class="poke-card__item">
        <div className="poke-card__img-box">
          <img src={this.state.currentPokemon.sprites.front_default} alt="" />
        </div>
        <p>{this.state.currentPokemon.name}</p>
      </li>       
    ) 
  }
};

export default PokeCard;
