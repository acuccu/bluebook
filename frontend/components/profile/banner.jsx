import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return(
            <>
            <span className='avatar-round'><img className='avatar-big' /></span>
            <span className='banner-image'>
                <img className='image' />
            </span>
            <h1>{`${this.props.first_name} ${this.props.last_name}`}</h1>

            <nav>

            <Link to='/in-progress'>Timeline</Link>
            <Link to='/in-progress'>About</Link>
            <Link to='/in-progress'>Photos</Link>
            <Link to='/in-progress'>More</Link>
            </nav>
            </>
        )
    }
}

export default Banner;