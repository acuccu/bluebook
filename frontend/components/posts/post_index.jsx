import React from 'react';
import PostIndexItem from './post';
import PostForm from './post_form_container';
import {withRouter} from 'react-router-dom';
import PostEdit from './post_edit'



class PostIndex extends React.Component {
    constructor (props){
      super(props);
      this.state = {
        posts: this.props.posts,
        profileId: this.props.profileId,
        edit: false,
        editPost: 0}
      this.editPost = this.editPost.bind(this);
      this.submitEditPost = this.submitEditPost.bind(this);
      this.closeEditPost = this.closeEditPost.bind(this);
    }
    
    

    componentDidMount () {
        this.props.friendships.forEach( userId => {
          this.props.fetchPosts(userId);
        });
        this.forceUpdate();
    }; 

    componentDidUpdate (prevProps, prevState) {
      if (prevProps.profileId !== this.props.profileId) {
          this.forceUpdate()
      }
    };

    editPost (postId) {
      this.setState({edit: true, editPost: postId})
    };


    closeEditPost () {
      this.setState({edit: fase})
    }

    
  
    render() {
      const author = this.props.user;
      return (
        <div>
          <PostForm />
          <div className="post-title"> Posts </div>
          <ul>
            {
              this.props.posts.reverse().map(post => (
                <>
                {(this.state.edit && post.id !== this.state.editPost) || 
                <PostEdit 
                  post={post}
                  users={this.props.users}
                  currentUserId={this.props.currentUserId}
                  submitEditPost={this.submitEditPost}
                  closeEditPost={this.closeEditPost}
                /> }
                <PostIndexItem
                  post={post}
                  key={post.id}
                  users={this.props.users}
                  currentUserId={this.props.currentUserId}
                  deletePost={this.props.deletePost}
                  editPost={this.editPost}
                />
                <div className='post-index-div'/>
                </>
              ))
            }
            
          </ul>
          
        </div>
      );
    }
  }
  
  export default withRouter(PostIndex);
