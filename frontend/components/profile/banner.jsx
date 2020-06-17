import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    constructor (props) {
        super(props)
        console.log(this.prop)
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.createFriend({userId: this.props.currentUser.id, friendId: this.props.profileUser.id});
    }

    // componentDidMount () {
    //     console.log(this.props);
    // }

    render () {
        return(
            
            <div className='banner-main'>

                <div className='banner-image' >
                      <div className='avatar-frame'></div>
                     <div className='banner-avatar'></div>          
                     <h1 className='h1-name'>{`${this.props.profileUser.first_name} ${this.props.profileUser.last_name}`}</h1>
                     {this.props.profileUser.id !== this.props.currentUserId &&
                     <button>Add Friend</button>
                     };
                </div>
            
                <div className='div-banner'>
                <nav className='nav-banner'>
                <div className='banner-separators' />
                <Link to='/in-progress'>Timeline</Link>
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