import { connect } from 'react-redux';
import ProfileEdit from './profile_intro_edit'
import {updateUser} from '../../actions/user_actions'

const mapStateToProps = ({session, entities: {users}}) => {
    return ({
        currentUser: users[session.currentUserId],
    })
};

const mapDispatchToProps = dispatch => ({
    updateUser: (user, userId) => dispatch(updateUser(user, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);