import { connect } from 'react-redux';
import FeedPosts from './feed_posts'
import {fetchPosts} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities: {posts}, entities: {users}}, ownProps) => {
    return(
      {
      posts: Object.values(posts),
      user: users[ownProps.match.params.userId]
      }
    )
};

  const mapDispatchToProps = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedPosts));
