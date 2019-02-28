import React from 'react';
import axios from 'axios';
import './../styles/components/PokeCard.css';

class PokeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemon : null
    }
  }
  
  async componentDidMount() {
    await this.getPokemon();
  }

  getPokemon = async () => {
    const response = await axios.get(`${this.props.pokemon.url}`);
    await this.setState({currentPokemon : response.data});
  }

  onPokeCardClick = () => {
    console.log('click');
    this.props.handlePokeCardClick(this.state.currentPokemon);
  }
  
  render() {
    if (!this.state.currentPokemon) return <div />
    
    if (this.state.currentPokemon.sprites.front_default){
      return (
        <li onClick={this.onPokeCardClick} tabIndex='0' className="poke-card__item">
          <div className="poke-card__img-box">
            <img src={this.state.currentPokemon.sprites.front_default} alt="" />
          </div>
          <p>{this.state.currentPokemon.name}</p>
        </li>       
      ) 
    } else {
      return <React.Fragment />
    } 
  }
};

export default PokeCard;
