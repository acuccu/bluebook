import { connect } from 'react-redux';
import Banner from './banner';
import {withRouter} from 'react-router-dom';
import {createFriend} from '../../actions/friend_actions';
import {deleteFriend} from '../../actions/friend_actions';
import {acceptFriend} from '../../actions/friend_actions';
import {fetchUser} from '../../actions/user_actions'


const mapStateToProps = ({ session, entities: { users, friends } }, ownProps) => {


 const extractFriends = (obj, ...args) => {
    return args.reduce((obj, arg) =>
      obj && obj[arg], obj)
  }  
// It searches a deep nested object for one or more keys and returns undefined if not found 
  let friendships = Boolean(friends[ownProps.match.params.userId]) ? friends[ownProps.match.params.userId] : {};
  let accfr = Boolean(friendships.accepted) ? Object.values(friendships.accepted) : [];
  let pendfr = friendships.pending ? Object.values(friendships.pending) : [];
  debugger
  return({
    users: users, 
    profileUser: users[ownProps.match.params.userId],
    profileUserID: ownProps.match.params.userId,
    currentAccepted: extractFriends(friends, session['currentUserId'], "accepted", ownProps.match.params.userId),
    currentPending: extractFriends(friends, session['currentUserId'], "pending", ownProps.match.params.userId),
    // currentAccepted: accfr,
    // currentPending: pendfr,
    friendships: accfr,
    currentUserId: session.currentUserId
  })
};

  const mapDispatchToProps = dispatch => ({
    createFriend: (friendship, user_id) => dispatch(createFriend(friendship, user_id)),
    deleteFriend: (userId, friendId) => dispatch(deleteFriend(userId, friendId)),
    acceptFriend: (userId, friendId) => dispatch(acceptFriend(userId, friendId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));