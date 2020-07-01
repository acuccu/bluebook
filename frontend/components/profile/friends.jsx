import React from 'react';
import {Link} from 'react-router-dom';

class Friends extends React.Component {

    constructor(props) {
        super(props);
        this.users = this.props.users;
        
        this.id = this.props.profileId;
        this.friendsArray = this.friendsArray.bind(this);

    }

    friendsArray () {
        debugger
        let friends = this.props.friendships.map((fr) => {
            debugger
            if (fr.user_id == this.id) {
                return this.users[fr.friend_id];
            } else {
                return this.users[fr.user_id]
            };
            });
        return friends;
        
    }

    componentWillUnmount () {
        debugger
        this.setState(() => {return {friendships: []}});
    }

    render () {
       let friends = this.friendsArray().slice(0,9);
        debugger
        return(
            <div className='friends_main'>
                <div className='friends_title'>
                    <i></i> Friends {this.props.friendships.length}
                </div>
                <div className="friends_pics">
                    {friends.map((friend) => {
                        return (
                            <div>
                               <Link to={`/users/${friend.id}`} > {friend.first_name} {friend.last_name}</Link>
                            </div>
                        )
                    }  )}
                </div>
                
            </div>
        )
    }
}

export default Friends