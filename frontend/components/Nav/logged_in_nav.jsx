import React from 'react';
import SearchBarContainer from './search_bar_container'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import MsgModal from './msg_modal'
import ReactModal from 'react-modal';



class LoggedInNav extends React.Component {

    constructor (props) {
        super(props)
        this.user = this.props.currentUser
        this.logout = this.props.logout
        this.showModal = this.props.showModal
        this.badge = this.props.badge
    }

    render() {
        return (
        <nav className="nav-profile" >
        <div className='logo-searchbar'>
        <img className='profile-logo' src={window.fishicon} />
        <SearchBarContainer />
        </div>
        <div className='nav-right'>
            <div className='avatar-group'>
                <div className='nav-avatar'></div>
                <Link to={`/users/${this.user.id}`}>{`${this.user.first_name}`}</Link>
                <div className="separators" />
                <Link to={`/feed/`}>Home</Link>
                <div className="separators"/>
            </div>
            
            <div className='logout-i-div'>
            <div className='nav-icons'> 
                <FontAwesomeIcon className="nav-i" icon={faUserFriends} />
                <FontAwesomeIcon onClick={()=>this.props.showModal()} className="nav-i" icon={faFacebookMessenger} />
                <ReactModal className="badge" isOpen={this.props["badge"]} overlayClassName={"ReactModal_Overlay"} ariaHideApp={false}>
                    <p className="badge-text">1</p>
                </ReactModal>
                <FontAwesomeIcon className="nav-i" icon={faBell} /> </div>
            
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