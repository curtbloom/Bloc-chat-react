import React, { Component } from 'react';


class RoomList extends Component {
   constructor(props) {
     super(props);
       this.state = {
  	 rooms: []
       };
       this.roomsRef = this.props.firebase.database().ref('room');
}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) });
  });
}

handleClick(index) {
    console.log("clicked: ", this.state.rooms[index]);
  }

  render() {
    return (
      <div>
        {this.state.rooms.map((room, index) => {
          return (
            <p
              key={room.key}
              onClick={() => this.handleClick(index)}
            >
              {room.val}
            </p>
          )
        })}
      </div>
    )
  }
}

export default RoomList
