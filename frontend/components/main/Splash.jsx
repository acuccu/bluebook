import React from 'react';
import SignUpPage from '../session/signup_page_container';
import Presentation from './Presentation'

class Splash extends React.Component {

    constructor(props) {
        super(props)
    };


    render () {
        return (
         <div className='main-session'>
            <Presentation />
            <SignUpPage />
         </div>
        );
    }

}

export default Splash; 