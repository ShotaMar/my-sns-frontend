import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className='login-logo'>My SNS</h3>
                    <span className="login-desc">SNS作成中</span>
                </div>
                <div className="login-right">
                    <form className="login-box">
                        <p className="login-message">wellcome</p>
                        <input 
                            type="email" 
                            className="login-input" 
                            placeholder="mail" 
                            required
                        />
                        <input 
                            type="password" 
                            className="login-input" 
                            placeholder="password"
                            required
                            minLength="6"
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