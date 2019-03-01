import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList';
import * as firebase from 'firebase';
import User from './components/User';

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
  constructor(props) {
    super(props)
    this.state = {
      activeRoom: null,
      user: null
    };
  }

  setActiveRoom(room) {
    this.setState({activeRoom: room});
  }

  setUser(user) {
  this.setState({user: user});
}

  render() {
    return (
      <div className="App">
        <aside id="sidebar">
          <h1 className="App-title">Bloc Chat</h1>
          <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)} />
        </aside>
        <aside id="sidebar-bottom">
          <User firebase={firebase} user={this.state.user} setUser={this.setUser.bind(this)} />
        </aside>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
      </div>
    );
  }
}

export default App;
