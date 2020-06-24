import React from 'react';
import {Link} from 'react-router-dom';

class Friends extends React.Component {

    constructor(props) {
        super(props);
        this.users = this.props.users;
        this.friendships = this.props.friendships;
        this.id = this.props.profileId;
        this.friendsArray = this.friendsArray.bind(this);

    }

    friendsArray () {
        const friends = this.friendships.map((fr) => {
            if (fr.user_id == this.id) {
                return this.users[fr.friend_id];
            } else {
                return this.users[fr.user_id]
            };
        });
        return friends;
    }

    render () {
        friends = this.friendsArray().slice(0,9);
        return(
            <div className='friends_main'>
                <div className='friends_title'>
                    <i></i> Friends {this.friendships.length()}
                </div>
                <div className="friends_pics">
                    {friends.map((friend) => {
                        return (
                            <div>
                               <Link to={`/users/${friend.id}`}> {friend.first_name} {friend.last_name}</Link>
                            </div>
                        )
                    }  )}
                </div>
                
            </div>
        )
    }
}

export default Friends