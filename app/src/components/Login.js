import React from 'react'
import LoginForm from '../pages/LoginForm'
import AccountNav from '../components/AccountNav'
function Login(){
    return(
        <div className="login">
            <div className="container">
                    <AccountNav />
                    <LoginForm/>
                </div>
            </div>
    )
}

export default Login