import React, { useEffect, useState } from 'react'
import Post from '../post/Post.jsx'
import Share from '../share/Share.jsx'
import './Timeline.css'
import axios from "axios"
// import { Posts } from '../../dummyData'

function Timeline() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => { 
    //useEfectにはasyncをつけられないため別でasync用関数を書く
    const fetchPosts = async() => {
      const res = await axios.get('/posts/timeline/62aa05ceacb62a8278248741')
      setPosts(res.data)
    }
    fetchPosts()
  },[])

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