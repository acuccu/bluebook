import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Splash from './Splash'
import LoginNav from '../Nav/LoginNav'


class Main extends React.Component {

    render () {
        return (
            <div className='splash'>
            <LoginNav />
            <Splash />
            </div>
        )
    }
}

export default Main; 