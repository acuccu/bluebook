import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthRoute} from '../../util/routes_util'
import {LoginPage} from './login_page'

class LoginForm extends React.Component {
    
    constructor (props) {
        
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.errorCB = this.errorCB.bind(this);
        this.loginCB = this.loginCB.bind(this);
        this.state = this.props.credentials;
        this.login = this.props.login;
    }

    handleSubmit (e) {

        e.preventDefault();
        this.login(this.state).then(() => this.loginCB(), () => this.errorCB());

        e.preventDefault();
        this.login(this.state);
    }

    errorCB () {
        this.props.history.push("/login")};
        
    loginCB () {
        return <Redirect to="/feed"/>
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
      }

    render() {
    return (
       <div className="nav-inside">
           <a className="nav-logo" href='https://thebluebook.herokuapp.com/'>bluebook</a>
           <div className="login-nav">
               <form onSubmit={this.handleSubmit}>
                <div className='inside-form'>
                <label className="auth-block"><p>Email or Phone</p>
                <div></div>
                <input id="auth-p" type="text" onChange={this.update('auth')} value={this.state.auth}/>
               </label>
               <div></div>
               <label className="auth-pw"><p id="auth-pw">Password</p>
                <div></div>
                   <input type="password" onChange={this.update('password')} value={this.state.password}/>
               </label>
               <div></div>
               <button id="login-submit" type='submit'>Log In</button></div>
           </form></div>
       </div>
    )
    }
}

export default LoginForm;