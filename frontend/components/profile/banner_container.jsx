import { connect } from 'react-redux';
import Banner from './banner'
import {withRouter} from 'react-router-dom'
import {createFriend} from '../../actions/friend_actions'

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return({
    profileUser: users[ownProps.match.params.userId], 
    currentUserId: session['currentUserId']
  })};

  const mapDispatchToProps = dispatch => ({
    createFriend: (friend) => dispatch(createFriend(friend))
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));