import { MoreVert } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Post.css'
// import { Users } from '../../dummyData'


function Post({ post }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => { 
        //useEfectにはasyncをつけられないため別でasync用関数を書く
        const fetchUser = async() => {
            const res = await axios.get(`/users/${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
        },[])

    const handleLike = () => {
        setLike(isLiked ? like -1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className="post-top-left">
                        <img src={user.profilePicture || PUBLIC_FOLDER + '/person/noAvatar.png'} alt='' className='post-profile-img' />
                        <span className='post-user-name'>
                            {user.username}
                        </span>
                        <span className='post-date'>{post.date}</span>
                    </div>
                <div className='post-top-right'>
                    <MoreVert />
                </div>
                </div>
                <div className='post-center'>
                    <span className="post-text">{post.desc}</span>
                    <img src={PUBLIC_FOLDER + post.img} alt='' className='post-img' />
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