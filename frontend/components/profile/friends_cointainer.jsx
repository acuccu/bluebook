import { connect } from 'react-redux';
import Friends from './friends';
import {withRouter} from 'react-router-dom';
import {fetchUser} from '../../actions/user_actions';
import {fetchPosts} from '../../actions/post_actions';


const mapStateToProps = ({entities: {users, friends}}, ownProps) => {
    let friendships = Boolean(friends[ownProps.match.params.userId]) ? friends[ownProps.match.params.userId] : {};
    let accfriends = Boolean(friendships.accepted) ? Object.values(friendships.accepted) : [] ;
    return({
        users: users, 
        friendships: accfriends,
        profileId: ownProps.match.params.userId
    });
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: (userId) => dispatch(fetchPosts(userId))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friends));