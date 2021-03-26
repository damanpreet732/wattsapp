import React from 'react'
import './Chat.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import db from './Firebase';

function Chat() {

    const [input, setinput] = useState('');
    const { roomId } = useParams();

    const [roomName, setroomName] = useState('');


    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed >>> ', input)
        setinput('')
    };

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) =>
                    setroomName(snapshot.data().name));
        }
    }, [roomId])

    return (
        <div className='chat'>

            <div className='chat_header'>
                <img src='' alt=''></img>
                <div className='header_info'>
                    <h3>{roomName}</h3>
                    <p>Last seen .....</p>
                </div>
                <div className='header_right'>
                    <span>Icon</span>
                    <span>Icon</span>
                    <span>Icon</span>
                </div>
            </div>

            <div className='chat_body'>
                <p className={`chat_message ${true && 'reciver'}`}>
                    <span className='chat_name'>Someone</span>
                    Hey Guys
                    <span className='chat_time'>10:46pm</span>
                </p>
                <p className={`chat_message ${false && 'reciver'}`}>
                    <span className='chat_name'>Damanpreet</span>
                    Hey Guys
                    <span className='chat_time'>10:46pm</span>
                </p>
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
