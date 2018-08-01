import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import openSocket from 'socket.io-client';
import Messages from './Messages'
import Form from './Form'

const socket = openSocket('http://localhost:3001');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Great React Chat</h1>
        </header>
        <Messages socket={socket}/>
        <Form socket={socket}/>
      </div>
    );
  }
}

export default App;
