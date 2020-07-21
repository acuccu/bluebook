import { connect } from 'react-redux';
import Banner from './banner';
import {withRouter} from 'react-router-dom';
import {createFriend} from '../../actions/friend_actions';
import {deleteFriend} from '../../actions/friend_actions';

const mapStateToProps = ({ session, entities: { users, friends } }, ownProps) => {


 const extractFriends = (obj, ...args) => {
    return args.reduce((obj, arg) =>
      obj && obj[arg], obj)
  }  
// It searches a deep nested object for one or more keys and returns undefined if not found 

  let friendships = friends[ownProps.match.params.userId] ? Object.values(friends[ownProps.match.params.userId].accepted) : [];

  return({
    users: users, 
    profileUser: users[ownProps.match.params.userId],
    currentAccepted: extractFriends(friends, session['currentUserId'], "accepted", ownProps.match.params.userId),
    currentPending: extractFriends(friends, session['currentUserId'], "pending", ownProps.match.params.userId),
    friendships: friendships,
    currentUserId: session.currentUserId
  })
};

  const mapDispatchToProps = dispatch => ({
    createFriend: (friendship, user_id) => dispatch(createFriend(friendship, user_id)),
    deleteFriend: (userId, friendId) => dispatch(deleteFriend(userId, friendId)),
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));