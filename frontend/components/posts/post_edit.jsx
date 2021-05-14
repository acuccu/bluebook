import React from 'react';
import {Link} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const PostEdit = props => {
    const {post} = props;
    const {users} = props;
    const deletePost = props.deletePost.bind(this); 
    const {currentUserId} = props;
    let date = new Date(post.created_at);
    return (
    <div className='post-item'>
    <li>
     <div className='post-item-title'>
      <img className={`post${users[post.author_id].avatar}avatar`} />
      
      <div><div className="author"><Link to={`/users/${post.author_id}`}><p>{users[post.author_id].first_name} {users[post.author_id].last_name}</p></Link>
        {currentUserId == post.author_id ?
          <DropdownButton id="postDropdown" title=". . .">
            <Dropdown.Item onClick={()=>this.props.editPost(post.id)}>Edit</Dropdown.Item>
             <Dropdown.Item id='postDelete' onClick={()=>deletePost(post.id)}>Delete</Dropdown.Item> 
          </DropdownButton>
        : <div />}
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
            defaultValue={post.body} 
        />
     </div>
    </li>

    <div className='post-item-icons'>
      
    </div>
    
    </div>

  )};
  
  export default PostEdit;