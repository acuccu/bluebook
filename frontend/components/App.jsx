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



class App extends React.Component{
    
    constructor (props) {
        super(props)
        this.showModal = this.showModal.bind(this)
        this.state = {
            isOpen: false,
            badge: true 
        }
    }

    showModal () {
        if (this.state["isOpen"]) {
            this.setState({isOpen: false})
        } else {
            this.setState({isOpen: true})
        }
        if (this.state["badge"]) {
            this.setState({badge: false})
        }
       }

    render () {
    const {currentUserId} = store.getState().session;
    return (
    <div className='app'>
        
        <HashRouter>
        {/* <Switch>     
            <AuthRoute exact path='/create' component={LoginNav} userId={currentUserId}/>
            <ProtectedRoute exact path='/feed' component={LoggedInNav} isOpen={this.state["isOpen"]} showModal={this.showModal} badge={this.state["badge"]}/>
            <ProtectedRoute exact path='/users/:userId' component={LoggedInNav} isOpen={this.state["isOpen"]} badge={this.state["badge"]} showModal={this.showModal}/>
            <ProtectedRoute exact path='/in-progress' component={LoggedInNav} />
            <AuthRoute exact path='/' component={LoginNav} userId={currentUserId}/>
        </Switch> */}

        <Switch> 
            <AuthRoute exact path='/' component={Main} userId={currentUserId} />˙
            <AuthRoute exact path='/login' component={LoginPage} userId={currentUserId}/>
            <AuthRoute exact path='/create' component={SignUpPage} userId={currentUserId}/>
            <ProtectedRoute exact path='/feed' component={FeedMain} userId={currentUserId} isOpen={this.state["isOpen"]} showModal={this.showModal} badge={this.state["badge"]}/>
            <ProtectedRoute exact path='/users/:userId' component={ProfileMain} isOpen={this.state["isOpen"]} showModal={this.showModal} badge={this.state["badge"]}/>
            <ProtectedRoute exact path='/in-progress' component={InProgress} />
           
        </Switch>
        
        </HashRouter>
    </div>
)}};

export default App; 