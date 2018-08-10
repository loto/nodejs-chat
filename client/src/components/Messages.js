import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {
  state = { messages: [] };

  componentDidMount() {
    this.props.socket.on('chat history', messages => this.setState({ messages: messages }));
    this.props.socket.on('chat message', message => {
      this.setState((prevState) => {
        return { messages: prevState.messages.concat(message) };
      });
    });
  }

  render() {
    return (
      <ul id='messages'>
        {this.state.messages.map((message, index) => <Message text={message} key={index} />)}
      </ul>
    );
  }
};

export default Messages;
