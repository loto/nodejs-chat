import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = { message: '' };

  sendMessage = (event) => {
    event.preventDefault();
    if (this.state.message.length > 0) {
      this.props.socket.emit('chat message', this.state.message);
      this.setState({ message: '' });
    }
  };

  onChange = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <form className='form'>
        <input type='text' placeholder='Type something...' value={this.state.message} onChange={this.onChange} />
        <button className='submit' onClick={this.sendMessage}><i className='fa fa-paper-plane'></i></button>
  		</form>
    );
  }
}

export default Form;
