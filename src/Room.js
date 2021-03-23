import React from 'react';
import './Room.css';

function Room({ addNewChat }) {

    const createChart = () => {
        const roomName = prompt('Enter name for chat : ');
        if(roomName){
            // do some stuff from database
        }
    }

    return !addNewChat ? (
        <div className='room'>
            <span>Avatar</span>
            <div className='room_info'>
                <h3>Room Name</h3>
                <p>Last message ...</p>
            </div>
        </div>
    ) : (
        <div className='room'>
            <h2 onClick={createChart}>Add New Chat</h2>
        </div>
    )
}

export default Room
