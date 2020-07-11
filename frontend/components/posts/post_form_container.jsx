import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = ({entities: {users}, session: {currentUserId}}) => ({
      post: {
        title: '',
        body: '',
        author_id: currentUserId
      },
      author: users[currentUserId]     
  });
  
  const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));