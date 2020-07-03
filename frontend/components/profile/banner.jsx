import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    constructor (props) {
        super(props);
        console.log(this.prop);
        this.buttonType = this.buttonType.bind(this);
    }

   

    buttonType () {
       if (this.props.currentAccepted) {
           return <div>Friends</div> ;
       } else if (this.props.currentPending) {
           return (this.props.currentPending.userId === this.props.currentUserId) ?  
           <div>Pending</div> : 
           <button>Accept</button> ;
       } else {
           return <button>Request Frienship</button> ;
       };

    }

    render () {
        debugger
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