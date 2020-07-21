import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    constructor (props) {
        super(props);
        console.log(this.prop);
        this.buttonType = this.buttonType.bind(this);
        // this.firendships = this.props.friendships;
    }

   

    buttonType () {
       if (this.props.currentUserId == this.props.match.params.userId) {
        return <div></div> ;
       } else if (this.props.currentAccepted) {
           return <button onClick={
             () => {
                 this.props.deleteFriend(this.props.currentUserId, this.props.match.params.userId)
             }
           }>Friends</button> ;
       } else if (this.props.currentPending) {
           return (this.props.currentPending.user_id == this.props.currentUserId) ?  
           <button onClick={
            () => {
                this.props.deleteFriend(this.props.currentUserId, this.props.match.params.userId)
            }}>Pending</button> : 
           <button>Accept</button> ;
       } else {
           return <button onClick={()=>
               this.props.createFriend(
                   {user_id: this.props.currentUserId, 
                    friend_id: this.props.profileUser.id,
                    accepted: false}, 
                    this.props.currentUserId
                )}
               >Request Friendship</button> ;
       };
    }


    render () {
        
        return(
            
            <div className='banner-main'>

                <div className='banner-image' >
                      <div className='avatar-frame'></div>
                     <div className='banner-avatar'></div>          
                     <h1 className='h1-name'>{`${this.props.profileUser.first_name} ${this.props.profileUser.last_name}`}</h1>
                     <div className='friend-button'>{this.buttonType()
                     };</div>
                </div>
            
                <div className='div-banner'>
                <nav className='nav-banner'>
                <div className='banner-separators' />
                   <Link to='/feed'>Timeline</Link>
                <div className='banner-separators' />
                <Link to='/in-progress'>About</Link>
                <div className='banner-separators' />
                <Link to='/in-progress'>Photos</Link>
                <div className='banner-separators' />
                <Link to='/in-progress'>More</Link>
                <div className='banner-separators' />
                </nav></div>
            </div>
        )
    }
}

export default Banner;