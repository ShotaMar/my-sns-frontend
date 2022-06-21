import React from 'react'
import Post from '../post/Post.jsx'
import Share from '../share/Share.jsx'
import './Timeline.css'

function Timeline() {
  return (
    <div className='timeline'>
        <div className='timeline-wrapper'>
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  )
}

export default Timeline