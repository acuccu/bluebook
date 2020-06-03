import React from 'react';
import SearchBar from './search_bar'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'



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
        <SearchBar />
        </div>
        <div className='nav-right'>
            <div className='avatar-group'>
                <div className='nav-avatar'></div>
                <Link to={`/users/${this.user.id}`}>{`${this.user.first_name}`}</Link>
                <div className="separators" />
                <Link to={`/feed/${this.user.id}`}>Home</Link>
                <div className="separators" /> 
                <Link to='/in-progress'>Create</Link> 
                <div className="separators"/>
            </div>
            
            <div className='logout-i-div'>
            <div className='nav-icons'> 
                <FontAwesomeIcon className="nav-i" icon={faUserFriends} />
                <FontAwesomeIcon className="nav-i" icon={faFacebookMessenger} />
                <FontAwesomeIcon className="nav-i" icon={faBell} /> </div>
            
            <div className="separator-i"></div>
            <div className="logout-div">
                <FontAwesomeIcon className="nav-i" icon={faQuestionCircle} />
                <FontAwesomeIcon className="nav-i" icon={faCaretDown} />
                <span className='logout-button'>
                    <button className="button-logout" onClick={()=>this.logout().then(history.push("/"))}>Logout</button>
                </span>
            </div></div>
        </div>
        </nav>)
    }
}


export default LoggedInNav;