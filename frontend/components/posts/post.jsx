import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";



const PostIndexItem = props => {
    const {post} = props;
    const {users} = props;
    let date = new Date(post.created_at);
    return (
    <div className='post-item'>
    <li>
     <div className='post-item-title'>
      <img className={`post${users[post.author_id].avatar}avatar`} />
      <div className="author">
      <Link to={`/users/${post.author_id}`}><p>{users[post.author_id].first_name} {users[post.author_id].last_name}</p></Link>
        <div className='post-author-separator'/>
        <div className="post-date">
        <p>{date.toDateString()}</p>
        <p>{users[post.author_id].first_name.location}</p></div>
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
  
  export default PostIndexItem;