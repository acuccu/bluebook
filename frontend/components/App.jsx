import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Main from './main/Main';
import LoginPage from './session/login_page_container';
import {ProtectedRoute, AuthRoute} from '../util/routes_util';
import LoginNav from './Nav/LoginNav';
import SignUpPage from './session/signup_page';
import LoggedInNav from './Nav/logged_in_nav';
import ProfileMain from './profile/profile_main'
import InProgress from './main/inprogress'


const App = () => {
    
    const {currentUserId} = store.getState().session;
    return (
    <div className='app'>
        
        <HashRouter>
        <Switch>
            <AuthRoute exact path='/' component={LoginNav} userId={currentUserId}/>
            <AuthRoute exact path='/create' component={LoginNav} userId={currentUserId}/>
            <ProtectedRoute exact path='/profile/:userId' component={LoggedInNav} />
            <ProtectedRoute exact path='/in-progress' component={LoggedInNav} />
        </Switch>

        <Switch>
            <AuthRoute exact path='/' component={Main} userId={currentUserId}/>˙
            <ProtectedRoute exact path='/home' />
            <AuthRoute exact path='/login' component={LoginPage} userId={currentUserId}/>
            <AuthRoute exact path='/create' component={SignUpPage} userId={currentUserId}/>
            <ProtectedRoute exact path='/profile/:userId' component={ProfileMain} />
            <ProtectedRoute exact path='/in-progress' component={InProgress} />
        </Switch>
        
        </HashRouter>
    </div>
)};

export default App; 