import React from 'react';
import PostIndexItem from './post';
import PostForm from './post_form_container'



class PostIndex extends React.Component {
    constructor (props){
      super(props);
    }
    componentDidMount() {
      
      this.props.fetchPosts(this.props.match.params.userId);
    }
  
    render() {
      const { posts } = this.props;
      const author = this.props.user;
      return (
        <div>
          <PostForm />
          <ul>
            {
              posts.reverse().map(post => (
                <PostIndexItem
                  post={post}
                  key={post.id}
                  author={author}
                />
              ))
            }
          </ul>
        </div>
      );
    }
  }
  
  export default PostIndex;
