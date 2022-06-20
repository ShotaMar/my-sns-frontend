import React from 'react'

export default function Topbar() {
    return (
        <div className='tobpar-container'>
            <div className='topbar-left'>
                <span className='logo'>My SNS</span>
            </div>
            <div className='topbar=center'>
                <div className='search-bar'>
                    <input type="text" className='search-input' placeholer='what do you want?' />
                </div>
            </div>
            <div className='topbar-right'>
                <div className='topbar-icon-item'>1</div>
                <div className='topbar-icon-item'>2</div>
            </div>
            <img src='/assets/person/1.jpeg' alt='' className='topbar-img' />
        </div>
    )
}
