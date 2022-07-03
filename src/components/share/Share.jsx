import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../state/AuthContext'
import axios from 'axios'
import './Share.css'

function Share() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if(file){
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('name', fileName)
            data.append('file', file)
            newPost.img = fileName
            try {
                //画像APIを叩く
                await axios.post('/upload', data)
            }catch(err) {
                console.log(err)
            }
        }

        try {
            await axios.post('/posts', newPost)
            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='share'>
            <div className='share-wrapper'>
                <div className='share-top'>
                    <img
                        src={
                            user.profilePicture
                            ? PUBLIC_FOLDER + user.profilePicture
                            : PUBLIC_FOLDER + '/person/noAvatar.png'
                        }
                        alt='' 
                        className='share-profile-img' 
                    />
                    <input 
                        type="text" 
                        className='share-input' 
                        placeholder='what are you doing ?' 
                        ref={desc}
                    />
                </div>
                <hr className='share-hr'/>
                <form className='share-buttons' onSubmit={(e) => handleSubmit(e)} >
                    <div className='share-options'>
                        <label className='share-option' htmlFor='file'>
                            <Image className='share-icon' htmlColor='blue'/>
                            <span className='share-option-text'>写真</span>
                            <input 
                                type="file" 
                                id="file" 
                                accept=".png, .jpeg, .jpg" 
                                style={{display: "none"}} 
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
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
                    <button className='share-button' type='submit'>投稿</button>
                </form>
            </div>
        </div>
    )
}

export default Share