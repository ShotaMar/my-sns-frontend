import React from 'react'

function SidebarFriend({user}) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className='sidebar-friend'>
            <img 
                src={PUBLIC_FOLDER + user.profilePicture}
                alt="" 
                className='sidebar-frined-img' 
            />
            <span className='sidebar-frined-name'>{user.username}</span>
        </li>
    )
}

export default SidebarFriend