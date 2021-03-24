import React from 'react';
import db from './Firebase';
import Room from './Room';
import './Sidebar.css';

import { useEffect, useState } from 'react';

function Sidebar() {

    const [rooms, setrooms] = useState([])
    // const [roomId, setroomId] = useState('')

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setrooms(snapshot.docs.map(doc =>
            ({
                id: doc.id,
                data: doc.data(),
            })
            ))
        })
    }, [])

    return (
        <div className='sidebar'>
            {/* <h1> Sidebar Section </h1> */}
            {/* SidebarHeader */}
            <div className='sidebar_header'>
                <span>Avatar</span>
                <div className='sidebar_headerRight'>
                    <span>Icon</span>
                    <span>Icon</span>
                    <span>Icon</span>
                </div>
            </div>
            {/* SidebarSearch */}
            <div className='sidebar_search'>
                <div className='searchContainer'>
                    <span>Icon</span>
                    <input placeholder='Search or Start new chat'></input>
                </div>
            </div>
            {/* Sidebarchats */}
            <div className='sidebar_chats'>
                <Room addNewChat />
                {rooms.map(room => (
                    <Room key={room.id} id={room.id} name={room.data.name} />
                ))}

                {/* <div>Rooms</div>
                <div>Rooms</div>
                <div>Rooms</div>
                <div>Rooms</div>
                <div>Rooms</div> */}
            </div>
        </div>
    )
}

export default Sidebar
