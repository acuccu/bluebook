import { connect } from 'react-redux';
import LoggedInNav from './logged_in_nav'
import {logout} from '../../actions/session_actions'


const mapStateToProps = ({session, entities: {users, friends}}, ownProps) => {
   
    let pendingArr = friends[session.currentUserId] ? Object.values(friends[session.currentUserId].pending) : [];
    let reqFriendships = pendingArr.filter( fr => fr.friend_id == session.currentUserId)
    debugger
    
    return ({
    currentUser: users[session.currentUserId],
    isOpen: ownProps.isOpen,
    showModal: ownProps.showModal,
    badge: ownProps.badge,
    pending: reqFriendships
})};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNav);
