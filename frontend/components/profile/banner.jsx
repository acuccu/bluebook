import React from 'react';
import { Link } from 'react-router-dom';
import MoreModal from './more_modal'

class Banner extends React.Component {

    constructor (props) {
        super(props);
        this.profileUser = this.props.profileUser;
        this.buttonType = this.buttonType.bind(this);
        this.state = {
            friendships: this.props.friendships,
            currentPending: this.props.currentPending
        }
    }

    buttonType () {
       if (this.props.currentUserId == this.props.match.params.userId) {
        return <div></div> ;
       } else if (this.props.currentAccepted) {
           return <button onClick={
             () => {
                 this.props.deleteFriend(this.props.currentUserId, this.props.match.params.userId)
             }
           }>Friends</button>
       } else if (this.props.currentPending) {
           return (this.props.currentPending.user_id == this.props.currentUserId) ?  
           <button onClick={
            () => {
                this.props.deleteFriend(this.props.currentUserId, this.props.match.params.userId)
            }}>Pending</button> : 
           <button onClick={
               () => {
                this.props.acceptFriend(this.props.currentUserId, this.props.match.params.userId)
               }
           }>Accept</button>
       } else {
           return <button onClick={()=>
               this.props.createFriend(
                   {user_id: this.props.currentUserId, 
                    friend_id: this.props.profileUser.id,
                    accepted: false}, 
                    this.props.currentUserId
                )}
               >Request Friendship</button>
       }
    }

  

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.profileUserID !== this.props.profileUserID) {
            this.profileUser = this.props.user
        }
    }

    componentDidMount () {
        this.props.profileUser || this.props.fetchUser(this.props.profileUserID)
    }


    render () {
        if (!this.props.profileUser) {
            return null
        }
        
        return(
            
            <div className='banner-main'>

                <div className={`banner${this.profileUser.id}image`} >
                      <div className='avatar-frame'></div>
                     <div className={`banner${this.profileUser.id}avatar`}></div>          
                     <h1 className='h1-name'>{`${this.props.profileUser.first_name} ${this.props.profileUser.last_name}`}</h1>
                     <div className='friend-button'>{this.buttonType()
                     }</div>
                </div>
            
                <div className='div-banner'>
                <nav className='nav-banner'>
                <div className='banner-separators' />
                   <Link to='/feed'>Timeline</Link>
                <div className='banner-separators' />
                <Link to='/in-progress'>About</Link>
                <div className='banner-separators' />
                <MoreModal />
                <div className='banner-separators' />
                </nav></div>
            </div>
        )
    }
}

export default Banner;