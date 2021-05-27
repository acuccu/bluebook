import { connect } from 'react-redux';
import Banner from './banner';
import {withRouter} from 'react-router-dom';
import {createFriend} from '../../actions/friend_actions';
import {deleteFriend} from '../../actions/friend_actions';
import {acceptFriend} from '../../actions/friend_actions';
import {fetchUser} from '../../actions/user_actions'
import {fetchUsers} from '../../actions/user_actions'
import {fetchPosts} from '../../actions/post_actions'
import {fetchFriends} from '../../actions/friend_actions'




const mapStateToProps = ({ session, entities: { users, friends } }, ownProps) => {

  let usersArray = Object.values(users);
  let usersId = usersArray.map(user => (user.id))
 const extractFriends = (obj, ...args) => {
    return args.reduce((obj, arg) =>
      obj && obj[arg], obj)
  }  
debugger
// It searches a deep nested object for one or more keys and returns undefined if not found 
  return({
    friendships: friends,
    users: usersId,
    profileUser: users[ownProps.match.params.userId],
    profileUserID: ownProps.match.params.userId,
    currentAccepted: extractFriends(friends, ownProps.match.params.userId, "accepted", session['currentUserId']),
    currentPending: extractFriends(friends, ownProps.match.params.userId, "pending", session['currentUserId']),
    currentUserId: session.currentUserId
  })
};

  const mapDispatchToProps = dispatch => ({
    createFriend: (friendship, user_id) => dispatch(createFriend(friendship, user_id)),
    deleteFriend: (userId, friendId) => dispatch(deleteFriend(userId, friendId)),
    acceptFriend: (userId, friendId) => dispatch(acceptFriend(userId, friendId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    fetchUsers: () => dispatch(fetchUsers()), 
    fetchFriends: (userId) => dispatch(fetchFriends(userId))
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));