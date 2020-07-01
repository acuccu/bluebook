import React from 'react';

class Friends extends React.Component {

    constructor(props) {
        super(props);
        this.users = this.props.users;
        this.friendsArray = this.friendsArray.bind(this);

    }

    friendsArray () {
        let friends = this.props.friendships.map((fr) => {
            if (fr.user_id == this.props.profileId) {
                return this.users[fr.friend_id];
            } else {
                return this.users[fr.user_id]
            };
            });
        return friends;
        
    }



    render () {
       let friends = this.friendsArray().slice(0,9);
        
        return(
            <div className='friends_main'>
                <div className='friends_title'>
                    <i></i> Friends {this.props.friendships.length}
                </div>
                <div className="friends_pics">
                    {friends.map((friend) => {
                        return (
                            <div>
                               <div onClick={ () => this.props.fetchUser(friend.id).then(() => this.props.history.push(`/users/${friend.id}`))} key={friend.id}> {friend.first_name} {friend.last_name}</div>
                            </div>
                        )
                    }  )}
                </div>
                
            </div>
        )
    }
}

export default Friends