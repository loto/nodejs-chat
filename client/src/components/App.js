import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messages from './Messages';
import Form from './Form';
import * as actions from '../actions/messagesActions';

const socket = openSocket('http://localhost:3001');

class App extends Component {
  componentDidMount() {
    const { storeActions } = this.props;

    socket.on('chat history', messages => storeActions.receiveHistory(messages));
    socket.on('chat message', message => storeActions.receiveMessage(message));
  }

  render() {
    return (
      <blockquote className="chat fit">
        <Messages />
        <Form socket={socket} />
      </blockquote>
    );
  }
}

function mapStateToProps() { return {}; }

function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
