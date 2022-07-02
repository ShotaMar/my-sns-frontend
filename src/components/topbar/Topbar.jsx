import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'

export default function Topbar() {
    return (
        <div className='topbar-container'>
            <div className='topbar-left'>
                <Link to={'/'} style={{textDecoration: "none"}}>
                    <span className='logo'>My SNS</span>
                </Link>
            </div>
            <div className='topbar-center'>
                <div className='search-bar'>
                    <Search className='search-icon' />
                    <input type="text" className='search-input' placeholer='what do you want?' />
                </div>
            </div>
            <div className='topbar-right'>
                <div className='topbar-icons'>
                    <div className='topbar-icon-item'>
                        <Chat />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className='topbar-icon-item'>
                        <Notifications />
                        <span className="topbar-icon-badge">2</span>
                    </div>
                <img src='/assets/person/1.png' alt='' className='topbar-img' />
                </div>
            </div>
        </div>
    )
}
