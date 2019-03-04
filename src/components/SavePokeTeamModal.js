import React from 'react';
import './../styles/components/SavePokeTeamModal.css';

class SavePokeTeamModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name : this.props.pokeTeam ? this.props.pokeTeam.name : '',
      description : this.props.pokeTeam ? this.props.pokeTeam.description : '',
      error :''
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
    if(!this.state.name) {
      this.setState({ error : 'Must enter a team name to save.'});
    } else {
      this.props.handleSaveTeam(this.state.name, this.state.description);
      this.props.history.push('/SavedTeams')
    }
  }

  renderMessage = () => {
    return (
      this.state.error ? `${this.state.error}`: `Enter a name and description for your team.`
    )
  }

  render() {
    return (
      <div className="modal__background" onClick={() => this.props.toggleModal()}>
        <div className='save-form modal__body' onClick={(e) => e.stopPropagation()}>
          <form action='' className="save-form__form" onSubmit={this.handleSubmit}>
            <h2 className='save-form__message'>{this.renderMessage()}</h2>
            <input 
              type='text' 
              placeholder='Team Name' 
              value={this.state.name}
              onChange={this.handleInputChange}
              className='save-form__name save-form__input'
            />
            <textarea 
              name='' 
              id='' 
              cols='20' 
              rows='10'
              placeholder='Team Description' 
              value={this.state.description}
              onChange={this.handleTextAreaChange}
              className='save-form__description save-form__input'
            />
            <div className="save-form__buttons">
              <button className='save-form__save save-form__button btn' type='submit'>
                {this.props.type ==='create' ? 'Save Team' : 'Edit Team'}
              </button>
              <button 
                className='save-form__back save-form__button btn' 
                onClick={this.onBackClick}
                type='button'
              >
              Back 
              </button>
            </div>
          </form>
        </div>
      </div>  
    );
  }
};

export default SavePokeTeamModal;
