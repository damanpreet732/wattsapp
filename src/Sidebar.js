import React from 'react';
import Room from './Room';
import './Sidebar.css';

function Sidebar() {
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
                <Room addNewChat/>
                <Room />
                <Room />
                <Room />

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
