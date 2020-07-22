import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';

class Friends extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        users: this.props.users}
        this.friendsArray = this.friendsArray.bind(this);

    }

    friendsArray () {
        let friends = this.props.friendships.map((fr) => {
            if (fr.user_id == this.props.profileId) {
    
                return this.props.users[fr.friend_id];
            } else {
    
                return this.props.users[fr.user_id]
            };
            });
        return friends;
        
    }

    render () {
       let friends = this.friendsArray().slice(0,9);   
        return(
            <div className='profile-intro'>
                <div className='friends_title'>
                    <FontAwesomeIcon className='icon-globe' icon={faUserFriends} />
                    <div className='friends-text'>Friends · {this.props.friendships.length}</div>
                </div>
                <div className="friends_pics">
                    {friends.map((friend) => {
                        return (
                            <div className='friend-frame' id={friend.id}>
                                <div className='friend-avatar'></div>
                                <div className='friend-name' onClick={ () => this.props.fetchUser(friend.id).then(() => this.props.fetchPosts(friend.id)).then(() => this.props.history.push(`/users/${friend.id}`))}> {friend.first_name} {friend.last_name}</div>
                            </div>
                        )
                    }  )}
                </div>
                
            </div>
        )
    }
}

export default Friends