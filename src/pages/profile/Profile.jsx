import React, { useState, useEffect } from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Profile.css'

function Profile() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
        }
        fetchUser()
    },[])

    return (
        <>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img 
                                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                                alt=""
                                className='profile-cover-img'
                            />
                            <img 
                                src={PUBLIC_FOLDER + "/person/1.png"}
                                alt=""
                                className='profile-user-img'
                            />
                        </div>
                        <div className="profile-info">
                            <h4 className='profile-info-name'>{ user.username }</h4>
                            <span className="profile-info-desc">{ user.desc }</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                    <Timeline user={ user }/>
                    <Rightbar user={ user }/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile