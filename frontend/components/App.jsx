import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Main from './main/Main'
import LoginPage from './session/login_page_container';
import {ProtectedRoute, AuthRoute} from '../util/routes_util';
import LoginNav from './Nav/LoginNav'
import SignUpPage from './session/signup_page'


const App = ({currentUser}) => (
    
    <div className='app'>
        
        <HashRouter>
        <Switch>
            <AuthRoute exact path='/' component={LoginNav} />
            <AuthRoute exact path='/create' component={LoginNav} />
        </Switch>

        <Switch>
            <AuthRoute exact path='/' component={Main} />˙
            <ProtectedRoute exact path='/home' />
            <AuthRoute exact path='/login' component={LoginPage} />
            <AuthRoute exact path='/create' component={SignUpPage} />
        </Switch>
        ˙
        </HashRouter>
    </div>
);

export default App; 