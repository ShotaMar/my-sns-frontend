import React from 'react'
import Online from '../online/Online'
import './RIghtbar.css'
import { Users } from '../../dummyData'

function Rightbar({ profile }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const HomeRightbar = () => {
        return (
            <>
                <div className="event-container">
                    <img src={PUBLIC_FOLDER + "/star.png"} alt="" className='star-img' />
                    <span className="event-text">
                        <b>フォロワー限定</b>イベント開催中！
                    </span>
                </div>
                <img src={PUBLIC_FOLDER + "/ad.jpeg"} alt="" className='event-img' />
                <h4 className='rightbar-title'>オンラインの友達</h4>
                <ul className="rightbar-friend-list">
                    {Users.map(user => (
                        <Online user={user} key={user.id}/>
                    ))}
                </ul>
                <p className="promotion-title">プロモーション広告</p>
                <img src={PUBLIC_FOLDER + "/promotion/promotion1.jpeg"} alt="" className='rightbar-promotion-img'/>
                <p className="promotion-name">ショッピング</p>
                <img src={PUBLIC_FOLDER + "/promotion/promotion2.jpeg"} alt="" className='rightbar-promotion-img'/>
                <p className="promotion-name">カーショップ</p>
                <img src={PUBLIC_FOLDER + "/promotion/promotion3.jpeg"} alt="" className='rightbar-promotion-img'/>
                <p className="promotion-name">株式会社AAA</p>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbar-title">user info</h4>
                <div className="rightbar-info">
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">出身：</span>
                        <span className="rightbar-info-key">滋賀</span>
                    </div>
                    <h4 className="rightbar-title">your friend</h4>
                    <div className="rightbar-followings">
                        <div className="rightbar-following">
                            <img 
                                src="/assets/person/1.png" 
                                alt="" 
                                className='rightbar-following-img'
                            />
                            <span className="rightbar-following-name">tanaka</span>
                        </div>
                        <div className="rightbar-following">
                            <img 
                                src="/assets/person/2.jpeg" 
                                alt="" 
                                className='rightbar-following-img'
                            />
                            <span className="rightbar-following-name">suzuki</span>
                        </div>
                        <div className="rightbar-following">
                            <img 
                                src="/assets/person/3.jpeg" 
                                alt="" 
                                className='rightbar-following-img'
                            />
                            <span className="rightbar-following-name">yamaki</span>
                        </div>
                        <div className="rightbar-following">
                            <img 
                                src="/assets/person/4.jpeg" 
                                alt="" 
                                className='rightbar-following-img'
                            />
                            <span className="rightbar-following-name">koga</span>
                        </div>
                        <div className="rightbar-following">
                            <img 
                                src="/assets/person/5.jpeg" 
                                alt="" 
                                className='rightbar-following-img'
                            />
                            <span className="rightbar-following-name">yamaki</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbar-wrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar