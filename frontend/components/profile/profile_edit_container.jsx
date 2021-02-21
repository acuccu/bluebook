import { connect } from 'react-redux';
import ProfileEdit from './profile_intro_edit'
import {updateUser} from '../../actions/user_actions'

const mapStateToProps = ({session, entities: {users}}) => {
    return ({
        currentUser: users[session.currentUserId],
    })
};

const mapDispatchToProps = dispatch => ({
    updateUser: () => dispatch(updateUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);