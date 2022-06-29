import React from 'react'
import Online from '../online/Online'
import './RIghtbar.css'
import { Users } from '../../dummyData'

function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbar-wrapper">
            <div className="event-container">
                <img src="/assets/star.png" alt="" className='star-img' />
                <span className="event-text">
                    <b>フォロワー限定</b>イベント開催中！
                </span>
            </div>
            <img src="/assets/ad.jpeg" alt="" className='event-img' />
            <h4 className='rightbar-title'>オンラインの友達</h4>
            <ul className="rightbar-friend-list">
                {Users.map(user => (
                    <Online user={user} key={user.id}/>
                ))}
            </ul>
            <p className="promotion-title">プロモーション広告</p>
            <img src="/assets/promotion/promotion1.jpeg" alt="" className='rightbar-promotion-img'/>
            <p className="promotion-name">ショッピング</p>
            <img src="/assets/promotion/promotion2.jpeg" alt="" className='rightbar-promotion-img'/>
            <p className="promotion-name">カーショップ</p>
            <img src="/assets/promotion/promotion3.jpeg" alt="" className='rightbar-promotion-img'/>
            <p className="promotion-name">株式会社AAA</p>
        </div>
    </div>
  )
}

export default Rightbar