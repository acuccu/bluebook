import { connect } from 'react-redux';
import FeedPosts from '../posts/post_index'
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: {posts}, entities: {users, friends}, session: {currentUserId}}) => {

    const friendsIdArray = (friendships) => {
      let friendsArr = friendships.map((fr) => {
          if (fr.user_id == currentUserId) {
              return fr.friend_id;
          } else {
              return fr.user_id
          };
          });
      return friendsArr;
    }
  
  
    let friendships = friends[currentUserId] ? Object.values(friends[currentUserId].accepted) : [];
    let friendUsers = friendsIdArray(friendships);
    let feedPosts = Object.values(posts).filter(post => {
        return friendUsers.includes(post.author_id)});

    // Searches through all the posts and filters in all the ones whose author is a friend of the user

    return(
      {
      posts: feedPosts,
      users: users,
      friends: friendUsers
      }
    )
};

  const mapDispatchToProps = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedPosts));
