import React from 'react';
import {withRouter, HashRouter} from 'react-router-dom'
import Splash from './Splash'
import LoginNav from '../Nav/LoginNav'


class Main extends React.Component {

    render () {
        return (
            <div className='splash'>
             <Splash />
            </div>
        )
    }
}

export default withRouter(Main); 