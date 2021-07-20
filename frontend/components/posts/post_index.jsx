import React from 'react';
import PostIndexItem from './post';
import PostForm from './post_form_container';
import {withRouter} from 'react-router-dom';
import PostEdit from './post_edit_container'



class PostIndex extends React.Component {
    constructor (props){
      super(props);
      this.state = {
        posts: this.props.posts,
        profileId: this.props.profileId,
        fetched: true,
        edit: false,
        editPost: 0}
      this.editPost = this.editPost.bind(this);
      this.closeEditPost = this.closeEditPost.bind(this);
    }
  

    editPost (postId) {
      this.setState({edit: true, editPost: postId})
    };


    closeEditPost () {
      this.setState({edit: false})
    }
  
    render() {
      const author = this.props.user;
      return (
        <div>
          <PostForm />
          <div className="post-title"> Posts </div>
          <ul>
            {
              this.props.posts.map(post => (
                <>
                {this.state.edit && (post.id == this.state.editPost) ? 
                <PostEdit 
                  post={post}
                  key={post.id + "edit"}
                  users={this.props.users}
                  currentUserId={this.props.currentUserId}
                  closeEditPost={this.closeEditPost}
                /> : null}
                <PostIndexItem
                  post={post}
                  key={post.id}
                  users={this.props.users}
                  editPost={this.editPost}
                  currentUserId={this.props.currentUserId}
                  deletePost={this.props.deletePost}
                  editPost={this.editPost}
                  createLike={this.props.createLike}
                  deleteLike={this.props.deleteLike}
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
