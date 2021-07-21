import { connect } from 'react-redux';
import FeedPosts from '../posts/post_index'
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {deletePost} from '../../actions/post_actions';
import {createLike} from '../../actions/like_actions';
import {deleteLike} from '../../actions/like_actions';

const mapStateToProps = ({entities: {users, friends, posts}, session: {currentUserId}}) => {

    const friendsIdArray = (friendships) => {
      let friendsArr = friendships.map((fr) => {
          if (fr.user_id == currentUserId) {
              return fr.friend_id;
          } else {
              return fr.user_id
          };
          });
      friendsArr.push(currentUserId)
      return friendsArr;
    }
  
    let friendships = friends[currentUserId] || {};
    let accfr = friendships.accepted ? Object.values(friendships.accepted) : [];
    let friendUsers = friendsIdArray(accfr);
    let feedPosts = Object.values(posts).filter(post => {
        return friendUsers.includes(post.author_id)});
    // Searches through all the posts and filters in all the ones whose author is a friend of the user
    return(
      {
      posts: feedPosts.reverse(),
      users: users,
      friendships: friendUsers,
      currentUserId: currentUserId
      }
    )
};

  const mapDispatchToProps = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    createLike: (userId, postId) => dispatch(createLike(userId, postId)),
    deleteLike: (userId, postId) => dispatch(deleteLike(userId, postId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedPosts));
