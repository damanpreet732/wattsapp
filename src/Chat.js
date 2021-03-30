import React from 'react'
import './Chat.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import db from './Firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase'

function Chat() {

    const [input, setinput] = useState('');
    const { roomId } = useParams();

    const [roomName, setroomName] = useState('');
    const [messages, setmessages] = useState([])

    const [{ user }, dispatch] = useStateValue();


    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed >>> ', input)
        setinput('')

        // console.log(user)

        // console.log(firebase.firestore.FieldValue.serverTimestamp())

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
    };

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) =>
                    setroomName(snapshot.data().name));

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => setmessages(snapshot.docs.map(doc => doc.data())))
        }

    }, [roomId])

    return (
        <div className='chat'>

            <div className='chat_header'>
                <img src='' alt=''></img>
                <div className='header_info'>
                    <h3>{roomName}</h3>
                    <p>Last seen {' '} {messages[messages.length - 1]?.timestamp.toDate().toUTCString()}</p>
                </div>
                <div className='header_right'>
                    <span>Icon</span>
                    <span>Icon</span>
                    <span>Icon</span>
                </div>
            </div>


            <div className='chat_body'>
                {messages.map(message => (
                    <p className={`chat_message ${message.name === user.displayName && 'reciver'}`}>
                        <span className='chat_name'>{message.name}</span>
                        {message.message}
                        <span className='chat_time'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
            </div>


            <div className='chat_footer'>
                <span>Icon</span>
                <form>
                    <input value={input} onChange={(e) => setinput(e.target.value)} type='text' placeholder='Type a message'></input>
                    <button type='submit' onClick={sendMessage}>Send</button>
                </form>
                <span>Icon</span>
            </div>

        </div>
    )
}

export default Chat
