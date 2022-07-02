import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'
import { Users } from '../../dummyData'
import SidebarFriend from '../sidebarFriend/SidebarFriend'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-wrapper'>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Home className='sidebar-icon' />
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}} >
                        <span className='sidebar-list-item-text'>HOME</span>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Search className='sidebar-icon' />
                    <Link to='' style={{textDecoration: 'none', color: 'black'}}>
                        <span className='sidebar-list-item-text'>SEARCH</span>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Notifications className='sidebar-icon' />
                    <Link to='' style={{textDecoration: 'none', color: 'black'}}>
                        <span className='sidebar-list-item-text'>NOTIFICATION</span>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <MessageRounded className='sidebar-icon' />
                    <Link to='' style={{textDecoration: 'none', color: 'black'}}>
                        <span className='sidebar-list-item-text'>MESSAGE</span>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Bookmark className='sidebar-icon' />
                    <Link to='' style={{textDecoration: 'none', color: 'black'}}>
                        <span className='sidebar-list-item-text'>BOOK MARK</span>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Person className='sidebar-icon' />
                    <Link to='/profile/mar' style={{textDecoration: 'none', color: 'black'}}>
                        <span className='sidebar-list-item-text'>PROFILE</span>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Settings className='sidebar-icon' />
                    <Link to='' style={{textDecoration: 'none', color: 'black'}}>
                        <span className='sidebar-list-item-text'>SETTING</span>
                    </Link>
                </li>
            </ul>
            <hr className='sidebarHr' />
            <ul className='sidebar-friend-list'>
                {Users.map(user => (
                    <SidebarFriend user={user} key={user.id} />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar