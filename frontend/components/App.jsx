import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginNav from './Nav/LoginNav'
import Main from './main/Main'


const App = () => (
    <div>
            <LoginNav />
            <Main />
    </div>
);

export default App; 