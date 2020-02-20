import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return(
            
            <div className='banner-main'>

                <div className='banner-image' >
                      <div className='avatar-frame'></div>
                     <div className='banner-avatar'></div>          
                     <h1 className='h1-name'>{`${this.props.profileUser.first_name} ${this.props.profileUser.last_name}`}</h1>
                </div>
            
                <div className='div-banner'>
                <nav className='nav-banner'>
                <Link to='/in-progress'>Timeline</Link>
                <Link to='/in-progress'>About</Link>
                <Link to='/in-progress'>Photos</Link>
                <Link to='/in-progress'>More</Link>
                </nav></div>
            </div>
        )
    }
}

export default Banner;