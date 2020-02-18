import React from 'react';
import SearchBar from './search_bar'
import {Link} from 'react-router-dom'

class ProfileNav extends React.Component {

    constructor (props) {
        super(props);

    }

    render() {
        return (<nav className="nav-profile">
        <img className='profile-logo' src={favicon.ico} />
        <SearchBar />
        </nav>);
    }

}

const mapStateToProps = (state, ownProps) => {
    currentUser: 
}

export default ProfileNav;