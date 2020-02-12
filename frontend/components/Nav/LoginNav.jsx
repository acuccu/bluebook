import React from 'react';
import LoginForm from '../session/login_container'


LoginNav = props => (
    <div class="nav-login">
        <a href='https://thebluebook.herokuapp.com/'>Blue Book</a>
        <LoginForm props={props} />
    </div>
)

export default LoginNav