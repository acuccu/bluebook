import { connect } from 'react-redux';
import LoggedInNav from './logged_in_nav'
import {logout} from '../../actions/session_actions'


const mapStateToProps = ({session, entities: {users}}, ownProps) => {
    debugger
    return ({
    currentUser: users[session.currentUserId],
    isOpen: ownProps.isOpen,
    showModal: ownProps.showModal
})};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNav);
