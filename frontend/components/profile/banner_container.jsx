import { connect } from 'react-redux';
import Banner from './banner'
import {withRouter} from 'react-router-dom'
import {createFriend} from '../../actions/friend_actions'

const mapStateToProps = ({ session, entities: { users, friends } }, ownProps) => {
  debugger

  // let currentFriends = (session['currentUserId'] in friends) ? friends[session['currentUserId']] : {};
  // let accepted = ("accepted" in currentFriends ? currentFriends["accepted"] : {});
  // let pending = (ownProps.match.params.userId in currentFriends["pending"] ? currentFriends["pending"][ownProps.match.params.userId] : false);

 const extractFriends = (obj, ...args) => {
    return args.reduce((obj, arg) =>
      obj && obj[arg], obj)
  }  
  debugger 
  return({
    profileUser: users[ownProps.match.params.userId],
    currentAccepted: extractFriends(friends, session['currentUserId'], "accepted", ownProps.match.params.userId),
    currentPending: extractFriends(friends, session['currentUserId'], "pending", ownProps.match.params.userId),
    currentUserId: session['currentUserId']
  })
};

  const mapDispatchToProps = dispatch => ({
    createFriend: (friend) => dispatch(createFriend(friend))
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));