import React from 'react';
import LoginForm from '../session/login_container'


const LoginNav = props => (
    <div className="nav-login">
        <a href='https://thebluebook.herokuapp.com/'>Blue Book</a>
        <LoginForm />
    </div>
)

export default LoginNav