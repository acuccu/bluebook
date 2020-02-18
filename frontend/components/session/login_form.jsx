import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthRoute} from '../../util/routes_util'
import {LoginPage} from './login_page'
class LoginForm extends React.Component {
    
    constructor (props) {
        
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.user;
        this.login = this.props.login;
    }

    handleSubmit (e) {
        const errorCB = () => {
            this.props.history.push("/login")};

        e.preventDefault();
        this.login(this.state).then(null, errorCB);

        // return (
        //     <Route exact render={() => ( 
        //         <Redirect to='/login' />)} />
        //   )
        // debugger
        // 
        
        
            // () => this.props.history.push("/login"
        
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
               <button id="login-submit" type='submit' value={this.props.formType}>Log In</button></div>
           </form></div>
       </div>
    )
    }
}

export default LoginForm;