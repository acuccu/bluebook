import React from 'react';
import PostIndexItem from './post';
import PostForm from './post_form_container'
import {withRouter} from 'react-router-dom';



class PostIndex extends React.Component {
    constructor (props){
      super(props);
      this.state = {
        posts: this.props.posts,
        profileId: this.props.profileId}
    }
    
    componentDidMount () {
        this.props.friendships.forEach( userId => {
          this.props.fetchPosts(userId);
        });
        this.forceUpdate();
    }; 

    
  
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
                  users={this.props.users}
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
