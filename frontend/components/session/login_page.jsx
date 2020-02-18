import React from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.user;
        this.login = this.props.login;
    }

    handleSubmit (e) {
        e.preventDefault();
        this.login(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
      }

    render () {
        return (
            <>
            <div className="nav-inside">
                <a className="nav-logo" href='https://thebluebook.herokuapp.com/'>bluebook</a>
            <div><Link to='/create' >Create New Account </Link> </div>
            </div>
            <div className='login-white-square'>
                <form className="login-page" onSubmit={this.handleSubmit}>
                    <h1>Log into Bluebook</h1>
                    <p>Email or Phone</p>
                    <input id="auth-p" type="text" onChange={this.update('auth')} value={this.state.auth}/>
                    <p id="auth-pw">Password</p>
                    <input type="password" onChange={this.update('password')} value={this.state.password}/>
                    <button id="login-form-submit" type='submit' value={this.props.formType}>Log In</button>
                </form>
             </div>
            </>
        )
    }
}



export default LoginPage

