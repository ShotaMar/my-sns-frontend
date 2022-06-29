import React from 'react'
import Post from '../post/Post.jsx'
import Share from '../share/Share.jsx'
import './Timeline.css'
import { Posts } from '../../dummyData'

function Timeline() {
  return (
    <div className='timeline'>
        <div className='timeline-wrapper'>
            <Share />
            {Posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    </div>
  )
}

export default Timeline