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
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout () {

     (e) => {
        e.preventDefault();
        logout()
          .then( history.push("/") );
      };
    }

    render() {
        return (
        <nav className="nav-profile" >
        <div className='logo-searchbar'>
        <img className='profile-logo' src={window.fishicon} />
        <SearchBar />
        </div>
        <div>
            <div class="image-container" data-large="https://assets.imgix.net/unsplash/bear.jpg?w=1000">
                <img class="placeholder" src="https://assets.imgix.net/unsplash/bear.jpg?w=50" class="img-small"/>
            </div>
            <Link to={`/users/${this.user.id}`}>{`${this.user.first_name}`}</Link>
            <Link to='/in-progress'>Home</Link>
            <Link to='/in-progress'>Create</Link>
        </div>
        <div className='nav-right'>
            <div className='nav-icons'> 
                <FontAwesomeIcon className="userfriends" icon={faUserFriends} />
                <FontAwesomeIcon className="fb-messenger" icon={faFacebookMessenger} />
                <FontAwesomeIcon className="bell" icon={faBell} />
                
            </div>
            <div className="logout-div">
                <FontAwesomeIcon className="question-circle" icon={faQuestionCircle} />
                <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                <span className='logout-button'>
                    <button className="button-logou" onClick={ this.handleLogout }>Logout</button>
                </span>
            </div>
        </div>
        </nav>)
    }
}


export default LoggedInNav;