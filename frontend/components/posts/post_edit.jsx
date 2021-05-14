import React from 'react';
import {Link} from "react-router-dom";


class PostEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.post.body,
            author_id: this.props.post.author_id,
            wall_id: this.props.post.wall_id
        };
        this.submitEditPost = this.submitEditPost.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    submitEditPost (post) {
        this.props.updatePost(post).then(this.props.closeEdit())
      }

    updateText () {
        return e => this.setState({body: e.currentTarget.value})
    }

    
    
    render () {
    let date = new Date(post.created_at);
    return (
    <div className='post-item'>
     <div className='editPostTitle'><p>Edit Post</p>
     <div className='closeEditPost' onClick={this.props.closeEdit()}>X</div>
     </div>
     <li>
     <div className='post-item-title'>
      <img className={`post${users[this.post.author_id].avatar}avatar`} />
      
      <div>
        <div className="author">
            <Link to={`/users/${post.author_id}`}>
                <p>{users[post.author_id].first_name} {users[post.author_id].last_name}</p>
            </Link>
        </div>
        <div className='post-author-separator'/>
        <div className="post-date">
        <p>{date.toDateString()}</p>
        </div>
       </div> 
     </div>
     <div className='post-body'>
        <input 
            type="text" 
            value={this.state.post.body}
            onChange={this.updateText()}
        />
     </div>
    </li>

    <div className='post-item-icons'>
        <div className='saveEdit' onClick={()=>this.submitEditPost(this.state)}>Save</div>
    </div>
    
    </div>

  )}};
  
  export default PostEdit;