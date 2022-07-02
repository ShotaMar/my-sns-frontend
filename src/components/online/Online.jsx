import React from 'react'

function Online({ user }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
                <img src={PUBLIC_FOLDER + user.profilePicture} alt="" className='rightbar-profile-img'/>
                <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-user-name">{user.username}</span>
        </li>
    )
}

export default Online