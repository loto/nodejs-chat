import React, { Component } from 'react';

class Form extends Component {
  state = { message: "" };

  sendMessage = (event) => {
    event.preventDefault();
    this.props.socket.emit("chat message", this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form onSubmit={this.sendMessage}>
        <input type="text" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
