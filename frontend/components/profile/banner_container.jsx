import { connect } from 'react-redux';
import Banner from './banner'

const mapStateToProps = ({ session, entities: { users } }) => ({
    profileUser: users[ownProps.match.params.userId], 
    currentUser: users[session.currentUserid],
  });

export default connect(mapStateToProps)(Banner);