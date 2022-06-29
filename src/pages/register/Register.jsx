import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className='login-logo'>My SNS</h3>
                    <span className="login-desc">SNS作成中</span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <p className="login-message">create new account</p>
                        <input type="text" className="login-input" placeholder='user name' />
                        <input type="text" className="login-input" placeholder='mail' />
                        <input type="text" className="login-input" placeholder='password'/>
                        <input type="text" className="login-input" placeholder='again password'/>
                        <button className="login-button">sign up</button>
                        <button className="login-register-button">login</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Register