import React, { Component } from 'react';
import Message from './Message';
import Loader from './Loader';

class Messages extends Component {
  state = { messages: [], loading: true };

  componentDidMount() {
    this.props.socket.on('chat history', messages => this.setState({ messages: messages }, () => {
      setTimeout(() => this.setState({ loading: false }), 1000);
    }));
    this.props.socket.on('chat message', message => {
      this.setState((prevState) => {
        return { messages: prevState.messages.concat(message) };
      });
    });
  }

  render() {
    const { messages, loading } = this.state;

    return (
      <div className='messages'>
        {loading && <Loader />}
        {!loading && messages.map((message, index) => <Message text={message} index={index} key={index} />)}
      </div>
    );
  }
};

export default Messages;
