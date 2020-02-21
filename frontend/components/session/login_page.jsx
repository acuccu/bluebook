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
            <div className="lin-create"><Link to='/create' >Create New Account </Link> </div>
            </div>
            <div className='login-white-square'>
            <p className="lin-error-message">The email or phone number you’ve entered doesn’t match any account. Sign up for an account.</p>

                <form className="login-page-form" onSubmit={this.handleSubmit}>
                    <h2>Log into Bluebook</h2>  
                    
                    <div className='lin-page-div'>
                        <div className="lin-auth-div">
                            <input className="lin-auth" type="text" onChange={this.update('auth')} placeholder="Email or Phone" value={this.state.auth}/>  
                        </div>
                        <div className="lin-pw-sub">
                        <input type="password" className="lin-auth" onChange={this.update('password')} placeholder="Password" value={this.state.password}/>    
                        </div> 
                        <div>
                        <button id="lin-submit" type='submit' value={this.props.formType}>Log In</button></div>
                    </div>
                </form>
             </div>
            </>
        )
    }
}



export default LoginPage

