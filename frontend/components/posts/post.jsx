import React from 'react';
import {Link} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'

const PostItem = props => {
    const {post} = props;
    const {users} = props;
    const deletePost = props.deletePost.bind(this);
    const {currentUserId} = props;
    const editPost = props.editPost;
    let date = new Date(post.created_at);
    return (
    <div className='post-item'>
    <li>
     <div className='post-item-title'>
      <img className={`post${users[post.author_id].avatar}avatar`} />
      
      <div><div className="author"><Link to={`/users/${post.author_id}`}><p>{users[post.author_id].first_name} {users[post.author_id].last_name}</p></Link>
        {currentUserId == post.author_id ?
          <div id='postDropDiv'>
            <FontAwesomeIcon icon={faEllipsisH} id="postElli" />
            <DropdownButton id="postDropdown" title=". . .">
            <div className='dropdownItems'>
              <div className='dropdownItem'><Dropdown.Item className='postEditClick' onClick={()=>editPost(post.id)}>Edit</Dropdown.Item></div>
              <div className='dropdownItem'><Dropdown.Item className='postEditClick'id='postDelete' onClick={()=>deletePost(post)}>Delete</Dropdown.Item></div> 
            </div>
          </DropdownButton></div>
        : <div />}
      </div>
        <div className='post-author-separator'/>
        <div className="post-date">
        <p>{date.toDateString()}</p>
        </div>
       </div> 
     </div>
     <div className='post-body'>
      <p>{post.body}</p>
     </div>
    </li>

    <div className='post-item-icons'>
      
    </div>
    
    </div>

  )};
  
  export default PostItem;