import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faTv} from '@fortawesome/free-solid-svg-icons';
import MsgModal from '../Nav/msg_modal'


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
                <Link to={`/users/${user.id}`}>{`${user.first_name} ${user.last_name}`}</Link>
            </div>
            <div className='bar-elements'>
                <div className='news-bar-element'>
                    <FontAwesomeIcon className='icon-bar' icon={faNewspaper} />
                <a href='https://www.linkedin.com/in/antonio-cuccu-4b0906114/'>News Feed</a>
                </div>
                <div className='news-bar-element' onClick={() => this.props.showModal()}>
                    <FontAwesomeIcon className="icon-bar" icon={faFacebookMessenger} />
                    <a>Messenger</a>
                </div>
            </div>
            <MsgModal isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
        </div>);
    }
}

export default SideBar;