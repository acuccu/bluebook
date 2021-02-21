import { connect } from 'react-redux';
import ProfileIntro from './profile_intro'
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: { users }}, ownProps, session) => {
    return ({
    user: users[ownProps.match.params.userId],
    currentUserId: session.currentUserId
})};

export default withRouter(connect(mapStateToProps)(ProfileIntro));