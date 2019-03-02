import React from 'react';
import './../styles/components/SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      type : '',
      textFilter : '',
    }
  }

  handleInputChange = (e) => {
    this.setState({ textFilter : e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.handlePokeSearch(this.state.textFilter, this.state.type);
  }

  handleTypeChange = async (e) => {
  //  await this.props.handlePokeTypeSearch(e.target.value);
  this.setState({ type: e.target.value });
  }
 
  render() {
    return (
    <div className='search-bar'>
      <form action='' onSubmit={this.handleSubmit} className='search-bar__form'>
      <span className='visuallyhidden' htmlFor='search-name'>Search by name</span>
      <input 
        type='text' 
        placeholder='Search Pokemon' 
        id='search-name'
        className='search-bar__name'
        value={this.state.textFilter}
        onChange={this.handleInputChange}
      />

      <span className='visuallyhidden' htmlFor='search-type'>Search pokemon by type</span>
      <select name='' id='search-type' onChange={this.handleTypeChange} value={this.state.type}    
          className='search-bar__type'>
        <option value='all'> all</option>
        <option value="normal">normal</option>
        <option value="fighting">fighting</option>
        <option value="water">water</option>
        <option value="flying">flying</option>
        <option value="grass">grass</option>
        <option value="poison">poison</option>
        <option value="electric">electric</option>
        <option value="ground">ground</option>
        <option value="psychic">psychic</option>
        <option value="rock">rock</option>
        <option value="ice">ice</option>
        <option value="bug">bug</option>
        <option value="dragon">dragon</option>
        <option value="ghost">ghost</option>
        <option value="dark">dark</option>
        <option value="steel">steel</option>
        <option value="fairy">fairy</option>
        <option value="fire">fire</option>
      </select> 
      
      <button type='Submit'>Search!</button>
      </form>
    </div>
    );
  }
};

export default SearchBar;