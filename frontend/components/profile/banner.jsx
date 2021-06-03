import React from 'react';
import { Link } from 'react-router-dom';
import MoreModal from './more_modal'

class Banner extends React.Component {

    constructor (props) {
        super(props);
        this.profileUser = this.props.profileUser;
        this.buttonType = this.buttonType.bind(this);
        this.state = {
            friendships: this.props.currentAccepted,
            currentPending: this.props.currentPending,
            fetched: false,
            buttonActive: false
        }
        this.fetchFunc = this.fetchFunc.bind(this);
    }

    buttonType () {
        debugger
       if (this.props.currentUserId == this.props.match.params.userId) {
        return <div></div> ;
        // if the currentUser is on its own profile no friend button will be displayed
       } else if (this.props.currentAccepted && !this.state.buttonActive) {
           return <button onClick={() => this.setState({buttonActive: true})
           }>Friends</button>
        // if visiting the profile of a friend pressing the friendButton will set a state that visualizes a second friendButton
        // this is a way to ask the user if they are sure they want to unfriend
       } else if (this.props.currentPending) {
           return (this.props.currentPending.user_id == this.props.currentUserId) ?  
           <button onClick={
            () => {
                this.props.deleteFriend(this.props.match.params.userId, this.props.currentUserId).then((res) => console.log(res))
            }}>Pending</button> : 
           <button onClick={
               () => {
                this.props.acceptFriend(this.props.match.params.userId, this.props.currentUserId)
               }
           }>Accept</button> 
       } else if (this.props.currentAccepted && this.state.buttonActive) {
                return (
                        <button onClick={
                            () => {
                                this.props.deleteFriend(this.props.match.params.userId, this.props.currentUserId).then(() => this.setState({buttonActive:false}) )
                            }}>Unfriend?</button>)
            //this is the friendButton asking the currentUser if they are sure they want to unfriend
       } else {
           return <button onClick={()=>
               this.props.createFriend(
                   {user_id: this.props.currentUserId, 
                    friend_id: this.props.profileUser.id,
                    accepted: false}, 
                    this.props.match.params.userId
                )}
               >Request Friendship</button>
       }
    }

    componentDidMount () {
        if (!this.state.fetched) {
            this.fetchFunc()
        }
    }


    fetchFunc () {
            this.props.fetchUsers().then(() => {
                this.props.users.forEach(userId => {
                    this.props.fetchFriends(userId).then(() => {
                        this.props.fetchPosts(userId).then(()=>{
                            this.setState({fetched: true});

                        })
                    })
                })  
            })
    }


    render () { 
        if (!this.props.profileUser) {
            return null
        } 
        
        
        return(
            
            <div className='banner-main'>

                <div className={`banner${this.props.profileUser.avatar}image`}>
                      <div className='avatar-frame'></div>
                     <div className={`banner${this.props.profileUser.avatar}avatar`}></div>          
                     <h1 className='h1-name'>{`${this.props.profileUser.first_name} ${this.props.profileUser.last_name}`}</h1>
                     <div className='friend-button'>{this.buttonType()
                     }</div>
                </div>
            
                <div className='div-banner'>
                <nav className='nav-banner'>
                <div className='banner-separators' />
                <Link to='/feed'>Timeline</Link>
                <div className='banner-separators' />
                <MoreModal />
                <div className='banner-separators' />
                </nav></div>
            </div>
        )
    }
}

export default Banner;