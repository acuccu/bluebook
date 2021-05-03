import { connect } from 'react-redux';
import LoggedInNav from './logged_in_nav'
import {logout} from '../../actions/session_actions'


const mapStateToProps = ({session, entities: {users, friends}}, ownProps) => {
    let friendships = Boolean(friends[session.currentUserId]) ? friends[session.currentUserId] : {};
    let pendingArr = Boolean(friendships.pending) ? Object.values(friendships.pending) : [];
    let reqFriendships = pendingArr.filter( fr => fr.friend_id == session.currentUserId);
    let pendingUsers = reqFriendships.map( fr => users[fr.user_id]);
    
    return ({
    currentUser: users[session.currentUserId],
    isOpen: ownProps.isOpen,
    showModal: ownProps.showModal,
    badge: ownProps.badge,
    pendingUsers: pendingUsers,
})};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNav);
