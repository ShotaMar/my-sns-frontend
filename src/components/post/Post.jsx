import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './Post.css'
import { Users } from '../../dummyData'


function Post({ post }) {
    return (
    <div className='post'>
        <div className='post-wrapper'>
            <div className='post-top'>
                <div className="post-top-left">
                    <img src={Users.filter(user => user.id === post.id)[0].profilePicture} alt='' className='post-profile-img' />
                    <span className='post-user-name'>
                        {Users.filter(user => user.id === post.id)[0].username}
                    </span>
                    <span className='post-date'>{post.date}</span>
                </div>
            <div className='post-top-right'>
                <MoreVert />
            </div>
            </div>
            <div className='post-center'>
                <span className="post-text">{post.desc}</span>
                <img src={post.photo} alt='' className='post-img' />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img src="/assets/heart.png" alt="" className='like-icon' />
                    <span className="post-like-counter">{post.like}</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-text">{post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post