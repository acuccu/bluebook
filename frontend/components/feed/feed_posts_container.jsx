import { connect } from 'react-redux';
import FeedPosts from '../posts/post_index'
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: {posts}, entities: {users, friends}, session: {currentUserId}}) => {

  const friendsArray = (friendships) => {
    let friendsArr = friendships.map((fr) => {
        if (fr.user_id == currentUserId) {
            return users[fr.friend_id];
        } else {
            return users[fr.user_id]
        };
        });
    return friendsArr;
  }
  
  
  let friendships = friends[currentUserId] ? Object.values(friends[currentUserId].accepted) : [];
  let friendUsers = friendsArray(friendships);

    return(
      {
      posts: Object.values(posts),
      user: users[currentUserId],
      friends: friendUsers
      }
    )
};

  const mapDispatchToProps = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedPosts));
