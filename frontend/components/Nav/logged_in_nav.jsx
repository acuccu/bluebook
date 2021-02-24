import React from 'react';
import SearchBarContainer from './search_bar_container'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import MsgModal from './msg_modal'


class LoggedInNav extends React.Component {

    constructor (props) {
        super(props);
        this.user = this.props.currentUser;
        this.logout = this.props.logout;
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
                <FontAwesomeIcon className="nav-i" icon={faBell} /> </div>
            
            <div className="separator-i"></div>
            <div className="logout-div">
              
                <span className='logout-button'>
                    <button className="button-logout" onClick={()=>this.logout().then(history.push("/"))}>Logout</button>
                </span>
            </div></div>
            <MsgModal isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
        </div>
        </nav>)
    }
}


export default LoggedInNav;