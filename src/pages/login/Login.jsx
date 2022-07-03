import React, { useRef }  from 'react'
import { useContext } from 'react'
import { loginCall } from '../../actionCall'
import { AuthContext } from '../../state/AuthContext'

import './Login.css'

function Login() {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall(
            {
                email: email.current.value,
                password: password.current.value
            },
            dispatch
        )
    }

    console.log(user)
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className='login-logo'>My SNS</h3>
                    <span className="login-desc">SNS作成中</span>
                </div>
                <div className="login-right">
                    <form className="login-box" onSubmit={(e) => handleSubmit(e)}>
                        <p className="login-message">wellcome</p>
                        <input 
                            type="email" 
                            className="login-input" 
                            placeholder="mail" 
                            required
                            ref={email}
                        />
                        <input 
                            type="password" 
                            className="login-input" 
                            placeholder="password"
                            required
                            minLength="6"
                            ref={password}
                        />
                        <button className="login-button">login</button>
                        <span className="login-forgot">if you forgot pass</span>
                        <button className="login-register-button">create account</button>
                    </form>
                </div>
            </div>
        </div>    
    )
}

export default Login