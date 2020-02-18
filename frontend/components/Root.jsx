import React from 'react';
import {Provider} from "react-redux";
import {HashRouter} from 'react-router-dom';
import App from './App';

// not plugged in entry file remember to do that 

const Root = ({ store }) => (
    <Provider store={store}>
            <App />
    </Provider>
);

export default Root; 
