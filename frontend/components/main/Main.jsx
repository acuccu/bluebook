import React from 'react';
import {withRouter} from 'react-router-dom'
import Splash from './Splash'
import LoginNav from '../Nav/LoginNav'


class Main extends React.Component {

    render () {
        return (
            <div>
                <LoginNav />
            <div className='splash'>
                <Splash />
            </div>
            </div>
        )
    }
}

export default withRouter(Main); 