import { connect } from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: {posts}, entities: {users}, session: {currentUserId}}) => {
    return(
      {
      posts: Object.values(posts),
      user: users[currentUserId]
      }
    )
};

  const mapDispatchToProps = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));

  