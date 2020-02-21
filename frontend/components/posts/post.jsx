import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";



const PostIndexItem = props => {
    const {post} = props;
    const {author} = props;
    let date = new Date(post.created_at);
    return (
    <div className='post-item'>
    <li>
     <div className='post-item-title'>
      <img className="post-item-avatar" />
      <div className="author">
      <Link to={`/users/${author.id}`}><p>{author.first_name} {author.last_name}</p></Link>
        <div className='post-author-separator'/>
        <div className="post-date">
        <p>{date.toDateString()}</p>
        <p>{author.location}</p></div>
       </div> 
     </div>
     <div className='post-body'>
      <p>{post.body}</p>
     </div>
    </li>

    <div className='post-item-icons'>
    <button className='post-button'>
       <FontAwesomeIcon className='icon-like' icon={faThumbsUp} />
        Like                     
    </button>
    <div className='horizontal-spacing'></div>
    <button className='post-button'>
       <FontAwesomeIcon className='icon-like' icon={faCommentAlt} />
        Comment                  
    </button>
    
    </div>
    
    </div>

  )};
  
  export default PostIndexItem;