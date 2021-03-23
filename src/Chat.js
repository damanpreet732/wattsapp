import React from 'react'
import './Chat.css'

function Chat() {
    return (
        <div className='chat'>

            <div className='chat_header'>
                <span>Avatar</span>
                <div className='header_info'>
                    <h3>Room name</h3>
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
                    <input type='text' placeholder='Type a message'></input>
                    <button type='submit'>Send</button>
                </form>
                <span>Icon</span>
            </div>

        </div>
    )
}

export default Chat
