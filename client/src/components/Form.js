import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = { message: '' };

  onChange = (event) => {
    this.setState({ message: event.target.value });
  };

  sendMessage = (event) => {
    event.preventDefault();

    const { message } = this.state;
    const { socket } = this.props;

    if (message.length > 0) {
      socket.emit('chat message', message);
      this.setState({ message: '' });
    }
  };

  render() {
    const { message } = this.state;

    return (
      <form className="form" onSubmit={this.sendMessage}>
        <input type="text" placeholder="Type something..." value={message} onChange={this.onChange} />
        <button className="submit" type="submit">
          <i className="fa fa-paper-plane" />
        </button>
      </form>
    );
  }
}

export default Form;
