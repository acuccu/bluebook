import React from 'react';
import SearchBarContainer from './search_bar_container'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import MsgModal from './msg_modal'
import Notifications from './notifications'



class LoggedInNav extends React.Component {

    constructor (props) {
        super(props)
        this.user = this.props.currentUser
        this.logout = this.props.logout
        this.showModal = this.props.showModal
        this.badge = this.props.badge
        this.state = {
            badge: false,
            notifications: false,
            clicked: false
        }
        this.badgeCheck = this.badgeCheck.bind(this)
        this.openNotifications = this.openNotifications.bind(this)
    }

    badgeCheck () {
        if (this.props.pendingUsers[0] && !this.state["clicked"]) {
            this.setState ({badge: true, clicked: true})
        }
    }

    openNotifications () {
        this.setState ({notifications: !this.state.notifications, badge: false})
    }

    render() {
        this.badgeCheck()
        return (
        <nav className="nav-profile" >

            <div className='logo-searchbar'>
                <img className='profile-logo' src={window.fishicon} />
                <SearchBarContainer />
            </div>
        <div className='nav-right'>
            <div className='avatar-group'>
                <Link to={`/users/${this.user.id}`} id="navUser"><div className={`nav${this.user.avatar}avatar`}></div>{`${this.user.first_name}`}</Link>
                <div className="separators" />
                <Link to={`/feed/`}>Home</Link>
                <div className="separators" />
            </div>
                
            <div className='nav-icons'> 
                
                    {/* This is the code for the badges */}        
                    <div className='div-i'>
                    <FontAwesomeIcon onClick={()=>this.props.showModal()} className="nav-i" icon={faFacebookMessenger} />
                    {this.props["badge"] ?
                    <div className="badge">
                        <p  onClick={()=>this.props.showModal()} className="badge-text">1</p>
                    </div> :
                    <div className="badgeNone" ><p className="badge-text">1</p></div>}
                    </div>

                    <div>
                    <FontAwesomeIcon className="nav-i" icon={faBell} onClick={()=>this.openNotifications() }/>
                    {this.state["badge"] ?
                    <div className="badgeNotifications"><p onClick={()=>this.openNotifications()} className="badge-text">{this.props.pendingUsers.length}</p></div>
                    : <div className="badgeNoNote"><p className="badge-text">1</p></div>}
                    </div>
                    {/* Here ends the code of the badges */}
                    <Notifications open={this.state.notifications} requests={this.props.pendingUsers} openNotifications={this.openNotifications}/>

                    <span className="separator-i" />
               
                    <span>
                        <button className="button-logout" onClick={()=>this.logout()}>Logout</button>
                    </span>
                
            <MsgModal isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
        </div>
        </div>
        </nav>)
    }
}


export default LoggedInNav;