import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginNav from './Nav/LoginNav'


const App = () => (
    <div>
        <h1>loading the blue book</h1>
            <LoginNav />
            <Main />
    </div>
);

export default App; 