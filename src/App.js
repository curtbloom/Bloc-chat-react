import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList'
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDEv4a_rA8C7QEtYgv7PCrpTp4m2DnW3b8",
  authDomain: "bloc-chat-react-4f747.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-4f747.firebaseio.com",
  projectId: "bloc-chat-react-4f747",
  storageBucket: "bloc-chat-react-4f747.appspot.com",
  messagingSenderId: "599347266517"
};
firebase.initializeApp(config);

  
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* Left Column */}
        <div className="col_left">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Bloc Chat</h1>
          </header>
          <RoomList database={firebase}></RoomList>
        </div>

        {/* Right Column */}
        <div className="col_right">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

      </div>

    );
  }
}

export default App;
