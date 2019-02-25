import React, { Component } from 'react';


class RoomList extends Component {
   constructor(props) {
     super(props);
       this.state = {
  rooms: []
       };
       this.roomsRef = this.props.firebase.database().ref("rooms");
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

handleNewRoomChange(e) {
    console.log("handleNewRoomChange(): ", e.target.value);
    this.setState({
      newRoomName: e.target.value,
    })
  }

handleNewRoomAdd() {
    if (!this.state.newRoomName) return

    this.roomsRef.push(this.state.newRoomName)
    this.setState({
      newRoomName: '',
    })
    console.log("add, state:", this.state);
  }

  render() {
    return (
      <div>
        <div className="new-room">
          <input type="text" id="send-input" value={this.state.newRoomName}
            onChange={(e) => this.handleNewRoomChange(e)} />
          <button type="button"
            className="new-room-button"
            onClick={() => this.handleNewRoomAdd()}>
            New Room
          </button>
        </div>

        <div>
          {this.state.rooms.map((room, index) => {
            return (
              <p key={room.key} onClick={() => this.handleRoomClick(index)}>
                {room.val}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default RoomList
