import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Splash from './Splash'

class Main extends React.Component {

    render () {
        return (
            <div className='splash'>
            <Splash />
            </div>
        )
    }
}

export default Main; 