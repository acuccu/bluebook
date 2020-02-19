import React from 'react';
import SearchBar from './search_bar'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions'

class LoggedInNav extends React.Component {

    constructor (props) {
        super(props);
        this.user = this.props.currentUser;
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout () {

     (e) => {
        e.preventDefault();
        logout()
          .then( history.push("/") );
      };
    }

    render() {
        return (
        <nav className="nav-profile" >
        <img className='profile-logo' src={favicon.ico} />
        <SearchBar />
        <div>
            <img className="user-avatar"/>
            <Link to={`/users/${user.id}`}>{`${this.user.first_name}`}</Link>
            <Link to='/in-progress'>Home</Link>
            <Link to='/in-progress'>Create</Link>
        </div>
        <div> <button className="button-logou" onClick={ handleLogout }>Logout</button></div>
        </nav>)
    }
}

const mapStateToProps = ({session, entities: {users}}) => ({
    currentUser: users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

connect(mapStateToProps, mapDispatchToProps)(LoggedInNav);

export default LoggedInNav;