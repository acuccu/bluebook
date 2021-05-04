import React from 'react';
import SearchBarContainer from './search_bar_container'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import MsgModal from './msg_modal'
import ReactModal from 'react-modal';
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
                <Link to={`/users/${this.user.id}`} id="navUser"><div className='nav-avatar'></div>{`${this.user.first_name}`}</Link>
                <div className="separators" />
                <Link to={`/feed/`}>Home</Link>
                <div className="separators"/>
            </div>
            
            <div className='logout-i-div'>
            <div className='nav-icons'> 
                {/* <FontAwesomeIcon className="nav-i" icon={faUserFriends} /> */}
                <FontAwesomeIcon onClick={()=>this.props.showModal()} className="nav-i" icon={faFacebookMessenger} />
                <ReactModal className="badge" isOpen={this.props["badge"]} overlayClassName={"ReactModal_Overlay"} ariaHideApp={false}>
                    <p  onClick={()=>this.props.showModal()} className="badge-text">1</p>
                </ReactModal>
                <ReactModal className="badgeNotifications" isOpen={this.state["badge"]} overlayClassName={"ReactModal_Overlay"} ariaHideApp={false}><p onClick={()=>this.openNotifications()} className="badge-text">{this.props.pendingUsers.length}</p></ReactModal>
                <FontAwesomeIcon className="nav-i" icon={faBell} onClick={()=>this.openNotifications() }/> </div>
                <Notifications open={this.state.notifications} requests={this.props.pendingUsers} openNotifications={this.openNotifications}/>
            <div className="separator-i"></div>
            <div className="logout-div">
              
                <span className='logout-button'>
                    <button className="button-logout" onClick={()=>this.logout()}>Logout</button>
                </span>
            </div></div>
            <MsgModal isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
        </div>
        </nav>)
    }
}


export default LoggedInNav;