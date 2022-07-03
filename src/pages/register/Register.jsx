import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
    const userName = useRef()
    const email = useRef()
    const password = useRef()
    const passwordConfirmation = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //PWと確認用PWが同一かどうか確認
        if(password.current.value != passwordConfirmation.current.value){
            passwordConfirmation.current.setCustomValidity('パスワードが一致しません')
        }else {
            try {
                const user = {
                    username: userName.current.value,
                    email: email.current.value,
                    password: password.current.value
                }
                //registerAPIを叩く
                await axios.post("/auth/register", user)
                //ログイン画面へリダイレクト
                navigate("/login")
            }catch(err){
                console.log(err)
            }
        }

    }

    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className='login-logo'>My SNS</h3>
                    <span className="login-desc">SNS作成中</span>
                </div>
                <div className="login-right">
                    <form className="login-box" onSubmit={(e) => handleSubmit(e)} >
                        <p className="login-message">create new account</p>
                        <input type="text" className="login-input" placeholder='user name' required ref={userName} />
                        <input type="email" className="login-input" placeholder='email' required ref={email} />
                        <input type="password" className="login-input" placeholder='password' required minLength="6" ref={password} />
                        <input type="password" className="login-input" placeholder='again password' required minLength="6" ref={passwordConfirmation} />
                        <button className="login-button" type='submit'>sign up</button>
                        <button className="login-register-button">login</button>
                    </form>
                </div>
            </div>
        </div>    
    )
}

export default Register