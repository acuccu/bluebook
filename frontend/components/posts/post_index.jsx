import React from 'react';
import PostIndexItem from './post';
import PostForm from './post_form_container'



class PostIndex extends React.Component {
    constructor (props){
      super(props);
      this.posts = this.props.posts;
    }
    
    componentDidMount() {
      if (this.props.match.params.userId) {
      this.props.fetchPosts(this.props.match.params.userId);
      } else {
        debugger
        this.props.friends.forEach( friend => {
          debugger
          this.props.fetchPosts(friend.id);
        });
      } 
    }
  
    render() {
      const { posts } = this.props;
      const author = this.props.user;
      return (
        <div>
          <PostForm />
          <div className="post-title"> Posts </div>
          <ul>
            {
              posts.reverse().map(post => (
                <>
                <PostIndexItem
                  post={post}
                  key={post.id}
                  author={author}
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
  
  export default PostIndex;
