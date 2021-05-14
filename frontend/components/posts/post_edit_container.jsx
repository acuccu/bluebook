import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostEdit from './post_edit'
import {updatePost} from '../../actions/post_actions'

const mapStateToProps = ({entities: {users}, session: {currentUserId}, ownProps}) => {

    return (
        {
        user: users[currentUserId],
        post: ownProps.post,
        closeEdit: ownProps.closeEdit,
        }
    )
};

const mapDispatchToProps = dispatch => ({
    updatePost: (post, userId) => dispatch(updatePost(post, userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEdit));
