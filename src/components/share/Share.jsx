import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import React from 'react'
import './Share.css'

function share() {
  return (
    <div className='share'>
        <div className='share-wrapper'>
            <div className='share-top'>
                <img src='/assets/person/1.jpeg' alt='' className='share-profile-img' />
                <input type="text" className='share-input' placeholder='what are you doing ?' />
            </div>
            <hr className='share-hr'/>
            <div className='share-buttons'>
                <div className='share-options'>
                    <div className='share-option'>
                        <Image className='share-icon' htmlColor='blue'/>
                        <span className='share-option-text'>写真</span>
                    </div>
                    <div className='share-option'>
                        <Gif className='share-icon' htmlColor='hotpink'/>
                        <span className='share-option-text'>GIF</span>
                    </div>
                    <div className='share-option'>
                        <Face className='share-icon' htmlColor='green'/>
                        <span className='share-option-text'>気持ち</span>
                    </div>
                    <div className='share-option'>
                        <Analytics className='share-icon' htmlColor='red'/>
                        <span className='share-option-text'>投票</span>
                    </div>
                </div>
                <button className='share-button'>投稿</button>
            </div>

        </div>
    </div>
  )
}

export default share