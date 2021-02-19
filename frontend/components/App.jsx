import React from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import Main from './main/Main';
import LoginPage from './session/login_page_container';
import {ProtectedRoute, AuthRoute} from '../util/routes_util';
import LoginNav from './Nav/LoginNav';
import SignUpPage from './session/signup_page';
import LoggedInNav from './Nav/logged_in_container';
import ProfileMain from './profile/profile_main_container'
import InProgress from './main/inprogress'
import FeedMain from '././feed/feed_main'

const App = () => {
    
    const {currentUserId} = store.getState().session;
    return (
    <div className='app'>
        
        <HashRouter>
        <Switch>
            <AuthRoute exact path='/' component={LoginNav} userId={currentUserId}/>
            <AuthRoute exact path='/create' component={LoginNav} userId={currentUserId}/>
            <ProtectedRoute exact path='/users/:userId' component={LoggedInNav} />
            <ProtectedRoute exact path='/in-progress' component={LoggedInNav} />
            <ProtectedRoute exact path='/feed' component={LoggedInNav} />
        </Switch>

        <Switch>
            <AuthRoute exact path='/' component={Main} userId={currentUserId}/>˙
            <ProtectedRoute exact path='/feed' component={FeedMain} userId={currentUserId} />
            <AuthRoute exact path='/login' component={LoginPage} userId={currentUserId}/>
            <AuthRoute exact path='/create' component={SignUpPage} userId={currentUserId}/>
            <ProtectedRoute exact path='/users/:userId' component={ProfileMain} />
            <ProtectedRoute exact path='/in-progress' component={InProgress} />
            <ProtectedRoute exact path='/feed/:userId' component={FeedMain} />
        </Switch>
        
        </HashRouter>
    </div>
)};

export default App; 