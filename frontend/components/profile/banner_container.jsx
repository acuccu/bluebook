import { connect } from 'react-redux';
import Banner from './banner'
import {withRouter} from 'react-router-dom'

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return({
    profileUser: users[ownProps.match.params.userId], 
    currentUser: users[session.currentUserid],
  })};

export default withRouter(connect(mapStateToProps)(Banner));