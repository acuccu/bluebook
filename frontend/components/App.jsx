import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginNav from './Nav/LoginNav'
import Main from './main/Main'


const App = () => (
    
    <div className='app'>
        <SWITCH>
            <Route exact path="/" component={<Main />} />
        </SWITCH>
            
    </div>
);

export default App; 