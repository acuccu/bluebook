import { connect } from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {deletePost} from '../../actions/post_actions'


const mapStateToProps = ({entities: {posts}, entities: {users, friends}, session: {currentUserId}}, ownProps) => {
    

    let friendships = friends[ownProps.match.params.userId] || {};
    let accfr = friendships.accepted ? Object.values(friendships.accepted) : [];

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
     };

      let userPosts = Object.values(posts).filter(post => {
        return  post.wall_id ==  ownProps.match.params.userId
      });
    return(
      {
      posts: userPosts,
      users: users,
      friendships: friendsIdArray(accfr),
      currentUserId: currentUserId,
      profileId: ownProps.match.params.userId
      }
    )
};

  const mapDispatchToProps = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post, userId) => dispatch(updatePost(post, userId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));

  