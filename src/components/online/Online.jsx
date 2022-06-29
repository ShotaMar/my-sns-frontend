import React from 'react'

function Online({ user }) {
    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
                <img src={user.profilePicture} alt="" className='rightbar-profile-img'/>
                <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-user-name">{user.username}</span>
        </li>
    )
}

export default Online