import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

function Profile() {
    return (
        <>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img 
                                src="/assets/post/3.jpeg"
                                alt=""
                                className='profile-cover-img'
                            />
                            <img 
                                src="/assets/person/1.png"
                                alt=""
                                className='profile-user-img'
                            />
                        </div>
                        <div className="profile-info">
                            <h4 className='profile-info-name'>mar</h4>
                            <span className="profile-info-desc">react勉強中</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                    <Timeline />
                    <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile