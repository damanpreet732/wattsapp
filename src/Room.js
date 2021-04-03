import React, { useState, useEffect } from 'react';
import db from './Firebase';
import './Room.css';

import { Link } from 'react-router-dom'

function Room({ addNewChat, id, name }) {

    const [messages, setMessages] = useState([]);

    const createChart = () => {
        const roomName = prompt('Enter name for chat : ');
        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            })
            // do some stuff from database
        }
    }

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) =>
                        doc.data()
                    ))
                )
        }

    }, [id])


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='room'>
                <img src='' alt=''></img>
                <div className='room_info'>
                    <h3>{name}</h3>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className='room'>
            <h2 onClick={createChart}>Add New Chat</h2>
        </div>
    )
}

export default Room
