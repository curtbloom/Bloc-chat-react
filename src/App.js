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
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  render() {
    return (
      <div className="App">
      <h1 className="App-title">Bloc Chat</h1>
      <main>
         <RoomList firebase={firebase} />
      </main>
      </div>

    );
  }
}

export default App;
