import React from 'react';
import PostItem from './post';



class PostIndex extends React.Component {
    constructor (props){
      super(props);
    }
    componentDidMount() {
      this.props.fetchPosts();
    }
  
    render() {
      const { posts } = this.props;
      const {author} = this.props;
      return (
        <div>
          <ul>
            {
              posts.map(post => (
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
