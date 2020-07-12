import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    constructor (props) {
        super(props);
        console.log(this.prop);
        this.buttonType = this.buttonType.bind(this);
    }

   

    buttonType () {
        debugger
       if (this.props.currentUserId == this.props.match.params.userId) {
           debugger
        return <div />;
       } else if (this.props.currentAccepted) {
           debugger
           return <button onClick={
             () => {
                 this.props.deleteFriend(this.props.currentUserId, this.props.match.params.userId)
             }
           }>Friends</button> ;
       } else if (this.props.currentPending) {
           return (this.props.currentPending.userId === this.props.currentUserId) ?  
           <div onClick={
            () => {
                this.props.deleteFriend(this.props.currentAccepted.id)
            }}>Pending</div> : 
           <button>Accept</button> ;
       } else {
           return <button onClick={()=>
               this.props.createFriends(
               {user_id: this.props.currentUserId, friend_id: this.props.profileUser.id, accepted: false}
               )}
               >Request Frienship</button> ;
       };
    }

    // fetchFriendsPosts (){

    //     friends.forEach( (friend) => {
    //         this.props.fetchPosts(friend);
    //     })
    // }

    render () {
        
        return(
            
            <div className='banner-main'>

                <div className='banner-image' >
                      <div className='avatar-frame'></div>
                     <div className='banner-avatar'></div>          
                     <h1 className='h1-name'>{`${this.props.profileUser.first_name} ${this.props.profileUser.last_name}`}</h1>
                     {this.buttonType()
                     };
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