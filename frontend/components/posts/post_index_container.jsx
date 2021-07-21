import { connect } from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {deletePost} from '../../actions/post_actions';
import {createLike} from '../../actions/like_actions';
import {deleteLike} from '../../actions/like_actions';



const mapStateToProps = ({entities: {users, friends, posts}, session: {currentUserId}}, ownProps) => {
    

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
        return  (post.wall_id ==  ownProps.match.params.userId)
      });
      
     
    return(
      {
      posts: userPosts.reverse(),
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
    updatePost: (post, userId) => dispatch(updatePost(post, userId)),
    createLike: (userId, postId) => dispatch(createLike(userId, postId)),
    deleteLike: (userId, postId) => dispatch(deleteLike(userId, postId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));

  