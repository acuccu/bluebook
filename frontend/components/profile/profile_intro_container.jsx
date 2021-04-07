import { connect } from 'react-redux';
import ProfileIntro from './profile_intro'
import {withRouter} from 'react-router-dom';
import {fetchUser} from '../../actions/user_actions'


const mapStateToProps = ({session, entities: { users }}, ownProps) => {
    return ({
    id: ownProps.match.params.userId,
    user: users[ownProps.match.params.userId],
    currentUserId: session.currentUserId
})};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileIntro));