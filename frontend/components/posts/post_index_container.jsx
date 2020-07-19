import { connect } from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: {posts}, entities: {users}, session: {currentUserId}}, ownProps) => {
    let userPosts = Object.values(posts).filter(post => {
      return  post.author_id ==  ownProps.match.params.userId});

    return(
      {
      posts: userPosts,
      users: users,
      currentUserId: currentUserId,
      profileId: ownProps.match.params.userId
      }
    )
};

  const mapDispatchToProps = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));

  