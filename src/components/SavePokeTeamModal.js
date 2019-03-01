import React from 'react';

class SavePokeTeamModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name : this.props.pokeTeam ? this.props.pokeTeam.name : '',
      description : this.props.pokeTeam ? this.props.pokeTeam.description : ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ name : e.target.value });
  }

  handleTextAreaChange = (e) => {
    this.setState({ description : e.target.value });
  }

  onBackClick = () => {
    this.props.toggleModal();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSaveTeam(this.state.name, this.state.description);
    this.props.history.push('/SavedTeams')
  }

  render() {
    return (
      <div className="modal__background">
        <div className='save-form modal__body'>
          <form action='' className="save-form__form" onSubmit={this.handleSubmit}>
            <input 
              type='text' 
              placeholder='Team Name' 
              value={this.state.name}
              onChange={this.handleInputChange}
              className='save-form__name'
            />
            <textarea 
              name='' 
              id='' 
              cols='30' 
              rows='10'
              placeholder='Team Description' 
              value={this.state.description}
              onChange={this.handleTextAreaChange}
              className='save-form__description'
            />
            <button className='save-form__save' type='submit'>Save Team </button>
            <button 
              className='save-form__back' 
              onClick={this.onBackClick}
              type='button'
            >
            Back 
            </button>
          </form>
        </div>
      </div>
      
    );
  }
 
};

export default SavePokeTeamModal;
