import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import MsgModal from '../Nav/msg_modal'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGit} from '@fortawesome/free-brands-svg-icons'
import {faAnchor} from '@fortawesome/free-solid-svg-icons'


class SideBar extends React.Component {

    constructor(props) {
        super(props);
        
    };
     
    
    render ()  {
        let {currentUserId} = store.getState().session;
        let user = store.getState().entities.users[currentUserId];
        return(
        <div className='side-bar'>
            <div className='bar-user'>
                <div className={`nav${user.avatar}avatar`}></div>
                <Link className='sideBarUser' to={`/users/${user.id}`}>{`${user.first_name} ${user.last_name}`}</Link>
            </div>
            <div className='bar-elements'>
                <div className='news-bar-element'>
                <Link to='/feed' className='news-bar-anchor'><FontAwesomeIcon className='icon-bar' icon={faNewspaper} /><p>News Feed</p></Link>
                </div>
                <div className='news-bar-element' onClick={() => this.props.showModal()}>
                    <div className='news-bar-anchor'><FontAwesomeIcon className="icon-bar" icon={faFacebookMessenger} /><p>Messenger</p></div>
                </div>
                <div className="news-bar-element">
                    <a className='news-bar-anchor' href="https://www.linkedin.com/in/antonio-cuccu-4b0906114/" target="blank_"><FontAwesomeIcon className="icon-bar" icon={faLinkedin} /><p>LinkedIn</p></a>
                </div>
                <div className="news-bar-element">
                    <a className='news-bar-anchor' href="https://github.com/acuccu" target="blank_"><FontAwesomeIcon className="icon-bar" icon={faGit} /><p>gitHub</p></a>
                </div>
                <div className="news-bar-element">
                    <a className='news-bar-anchor' href="https://acuccu.github.io/" target="blank_"><FontAwesomeIcon className='icon-bar' icon={faAnchor} />Portfolio</a>
                </div>
            </div>
            <MsgModal isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
        </div>);
    }
}

export default SideBar;