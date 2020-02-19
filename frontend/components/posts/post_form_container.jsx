import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
      post: {
      title: '',
      body: '',
      author_id: ownProps.match.params.userId
    }
  });
  
  const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));