import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post.jsx'
import Share from '../share/Share.jsx'
import './Timeline.css'
import axios from "axios"
import { AuthContext } from '../../state/AuthContext.jsx'
// import { Posts } from '../../dummyData'

function Timeline({ username }) {
  const [ posts, setPosts ] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => { 
    //useEfectにはasyncをつけられないため別でasync用関数を書く
    const fetchPosts = async() => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`) //プロフィール画面の場合
        : await axios.get(`/posts/timeline/${user._id}`) //ホーム画面の場合
      setPosts(res.data.sort((post1, post2) => {
        return new Date(post2.createdAt) - new Date(post1.createdAt)
      }))
    }
    fetchPosts()
  },[username, user._id])

  return (
    <div className='timeline'>
        <div className='timeline-wrapper'>
            <Share />
            {posts.map(post => (
                <Post post={post} key={post._id} />
            ))}
        </div>
    </div>
  )
}

export default Timeline