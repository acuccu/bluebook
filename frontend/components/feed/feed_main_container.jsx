import { connect } from 'react-redux';
import FeedMain from './feed_main';
import {fetchFriends} from '../../actions/friend_actions'
import {fetchPosts} from '../../actions/post_actions'
import {fetchUsers} from '../../actions/user_actions'
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: {users}}) => {
    let usersArray = Object.values(users);
    let usersId = usersArray.map(user => (user.id))
    return ({
        users: usersId
    }
    )
};

const mapDispatchToProps = dispatch => ({
    fetchFriends: (userId) => dispatch(fetchFriends(userId)),
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedMain));
