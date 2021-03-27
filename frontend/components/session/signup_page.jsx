import React from 'react';
import {withRouter} from 'react-router-dom'
import SignupForm from './signup_container'


class SignUpPage extends React.Component {

    constructor (props) {
        super(props);
        this.login = this.props.login.bind(this);
    }

    handleSubmit () {
        this.login(this.props.credentials)
        console.log("we are here");
        this.props.history.push('/feed');
    };

    render () {
        return (
            <div className='splash'>
                <SignupForm />
                <div className='demo-button'>
                    <button className='signup-button' type='submit' onClick = {() => this.handleSubmit()}>Demo Login</button>
                </div>
            </div>
        )
    };
}

export default withRouter(SignUpPage);