import React, { Component, Fragment } from 'react';
import openSocket from 'socket.io-client';
import Messages from './Messages'
import Form from './Form'

const socket = openSocket('http://localhost:3001');

class App extends Component {
  render() {
    return (
      <Fragment>
        <Messages socket={socket}/>
        <Form socket={socket}/>
      </Fragment>
    );
  }
}

export default App;
