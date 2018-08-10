import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import Messages from './Messages'
import Form from './Form'

const socket = openSocket('http://localhost:3001');

class App extends Component {
  render() {
    return (
      <blockquote className='chat fit'>
        <Messages socket={socket}/>
        <div style={{clear:'both'}}></div>
        <Form socket={socket}/>
      </blockquote>
    );
  }
}

export default App;
