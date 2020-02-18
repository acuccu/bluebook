import React from 'react';
import {withRouter} from 'react-router-dom'
import SignupForm from './signup_container'


class Main extends React.Component {

    render () {
        return (
            <div className='splash'>
             <SignupForm />
            </div>
        )
    }
}

export default withRouter(Main); 