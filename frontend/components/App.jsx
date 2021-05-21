import React from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import Main from './main/Main';
import LoginPage from './session/login_page_container';
import {ProtectedRoute, AuthRoute} from '../util/routes_util';
import SignUpPage from './session/signup_page';
import ProfileMain from './profile/profile_main_container'
import InProgress from './main/inprogress'
import FeedMain from '././feed/feed_main_container'



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
            const body = document.body;
  			body.style.height = '100%';
  			body.style.overflowY = 'auto';
            this.setState({isOpen: false})
        } else {
            const body = document.body;
  			body.style.height = '100vh';
  			body.style.overflowY = 'hidden';
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