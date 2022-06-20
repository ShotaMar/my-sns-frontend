import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-wrapper'>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Home className='sidebar-icon' />
                    <span className='sidebar-list-item-text'>HOME</span>
                </li>
                <li className='sidebar-list-item'>
                    <Search className='sidebar-icon' />
                    <span className='sidebar-list-item-text'>SEARCH</span>
                </li>
                <li className='sidebar-list-item'>
                    <Notifications className='sidebar-icon' />
                    <span className='sidebar-list-item-text'>NOTIFICATION</span>
                </li>
                <li className='sidebar-list-item'>
                    <MessageRounded className='sidebar-icon' />
                    <span className='sidebar-list-item-text'>MESSAGE</span>
                </li>
                <li className='sidebar-list-item'>
                    <Bookmark className='sidebar-icon' />
                    <span className='sidebar-list-item-text'>BOOK MARK</span>
                </li>
                <li className='sidebar-list-item'>
                    <Person className='sidebar-icon' />
                    <span className='sidebar-list-item-text'>PROFILE</span>
                </li>
                <li className='sidebar-list-item'>
                    <Settings className='sidebar-icon' />
                    <span className='sidebar-list-item-text'>SETTING</span>
                </li>
            </ul>
            <hr className='sidebarHr' />
            <ul className='sidebar-friend-list'>
                <li className='sidebar-friend'>
                    <img src="/public/assets/person/2.jpg" alt="" className='sidebar-frined-img'/>
                    <span className='sidebar-frined-name'>marmar</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar