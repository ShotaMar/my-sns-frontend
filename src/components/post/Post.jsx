import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import './Post.css'
import { Users } from '../../dummyData'


function Post({ post }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const handleLike = () => {
        setLike(isLiked ? like -1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className="post-top-left">
                        <img src={PUBLIC_FOLDER + Users.filter(user => user.id === post.id)[0].profilePicture} alt='' className='post-profile-img' />
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
                    <img src={PUBLIC_FOLDER + post.photo} alt='' className='post-img' />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img 
                            src={ PUBLIC_FOLDER + "/heart.png" }
                            alt="" 
                            className='like-icon' 
                            onClick={() => handleLike()}
                        />
                        <span className="post-like-counter">{like} いいね!</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment}：comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post