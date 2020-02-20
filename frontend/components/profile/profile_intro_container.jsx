import { connect } from 'react-redux';
import ProfileIntro from './profile_intro'
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: { users }}, ownProps) => {
    return ({
    user: users[ownProps.match.params.userId]
})};

export default withRouter(connect(mapStateToProps)(ProfileIntro));