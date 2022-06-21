import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className='post'>
        <div className='post-wrapper'>
            <div className='post-top'>
                <div className="post-top-left">
                    <img src='/assets/person/1.jpeg' alt='' className='post-profile-img' />
                    <span className='post-user-name'>tanaka</span>
                    <span className='post-date'>5min ago</span>
                </div>
            <div className='post-top-right'>
                <MoreVert />
            </div>
            </div>
            <div className='post-center'>
                <span className="post-text">making SNS...</span>
                <img src='/assets/post/1.jpeg' alt='' className='post-img' />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img src="/assets/heart.png" alt="" className='like-icon' />
                    <span className="post-like-counter">5person pushed good button</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-text">5 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post