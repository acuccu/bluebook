import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faTv} from '@fortawesome/free-solid-svg-icons';




class SideBar extends React.Component {
     
    
    render ()  {
        let {currentUserId} = store.getState().session;
        let user = store.getState().entities.users[currentUserId];
        return(
        <div className='side-bar'>
            <div className='bar-user'>
                <div className='feed-avatar'></div>
                <Link to={`/users/${user.id}`}>{`${user.first_name} ${user.last_name}`}</Link>
            </div>
            <div className='bar-elements'>
            <div className='news-bar-element'>
                <FontAwesomeIcon className='icon-bar' icon={faNewspaper} />
            <a href='https://www.linkedin.com/in/antonio-cuccu-4b0906114/'>News Feed</a>
            </div>
            <div className='news-bar-element'>
                <FontAwesomeIcon className="icon-bar" icon={faFacebookMessenger} />
                <a>Messenger</a>
            </div>
            <div className='news-bar-element'> 
                <FontAwesomeIcon className="icon-bar" icon={faTv} />
                <a>Watch</a>
            </div>
            </div>
        </div>);
    }
}

export default SideBar;