import React from 'react'

function SidebarFriend({user}) {
    return (
        <li className='sidebar-friend'>
            <img src={user.profilePicture} alt="" className='sidebar-frined-img' />
            <span className='sidebar-frined-name'>{user.username}</span>
        </li>
    )
}

export default SidebarFriend