import React, { Component } from 'react';
import '.././Styles/RoomList.css';

class RoomList extends Component {
   constructor(props) {
     super(props);
       this.state = {
  	 rooms: [],
         newRoomName: ''
       };
       this.roomsRef = this.props.firebase.database().ref("rooms");
   }

   componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }

   handleClick(index) {
    console.log("clicked: ", this.state.rooms[index]);
  }

   createRoom(newRoomName) {
      this.roomsRef.push({
         name: newRoomName
      });
      this.setState({ newRoomName: '' });
   }

   handleChange(e) {
      this.setState({ newRoomName: e.target.value });
   }

   handleSubmit(e) {
      e.preventDefault();
      this.createRoom(this.state.newRoomName);
   }

   render() {
     return (
        <section className="room-list">
	    <h3>Rooms</h3>
            {this.state.rooms.map( room =>
                <li key={room.key} onClick={() => this.props.setActiveRoom(room)} >
                  {room.name}
                </li>
            )}
            <form id="create-room" onSubmit={ (e) => this.handleSubmit(e) }>
               <input type="text" value={ this.state.newRoomName } onChange={ (e) => this.handleChange(e) }/>
               <input type="submit" />
            </form>
        </section>
     );
   }
}

export default RoomList;
