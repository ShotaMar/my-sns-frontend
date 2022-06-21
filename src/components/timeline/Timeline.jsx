import React from 'react'
import Share from '../share/Share.jsx'
import './Timeline.css'

function Timeline() {
  return (
    <div className='timeline'>
        <div className='timeline-wrapper'>
            <Share />
            {/* <Post /> */}
        </div>
    </div>
  )
}

export default Timeline