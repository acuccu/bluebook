import { connect } from 'react-redux';
import LoggedInNav from './logged_in_nav'
import {logout} from '../../actions/session_actions'


const mapStateToProps = ({session, entities: {users}}) => {
    return ({
    currentUser: users[session.currentUserId]
})};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNav);
