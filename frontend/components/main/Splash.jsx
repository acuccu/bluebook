import React from 'react';
import SignUpForm from '../session/signup_container';
import Presentation from './Presentation'

class Splash extends React.Component {

    constructor(props) {
        super(props)
    };


    render () {
        return (
         <div className='main-session'>
            <Presentation />
            <SignUpForm />
         </div>
        );
    }

}

export default Splash; 