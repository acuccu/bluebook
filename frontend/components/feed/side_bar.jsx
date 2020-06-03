import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {faTv} from '@fortawesome/free-solid-svg-icons';


class SideBar extends React.Component {
    render ()  {
        <div className='side-bar'>
            <div className='bar-user'>
                <div className='nav-avatar'></div>
                <Link to={`/users/${this.user.id}`}>{`${this.user.first_name} ${this.user.last_name}`}</Link>
            </div>
            <div className='news-bar'>
                <FontAwesomeIcon className='icon-bar' icon={faNewspaper} />
            <a href='https://www.linkedin.com/in/antonio-cuccu-4b0906114/'>News Feed</a>
            </div>
            <div className='bar-messenger'>
                <FontAwesomeIcon className="icon-bar" icon={faFacebookMessenger} />
                Messenger
            </div>
            <div className='Watch-bar'> 
                <FontAwesomeIcon className="icon-bar" icon={faTv} />
                Watch
            </div>
        </div>
    }
}

export default SideBar;