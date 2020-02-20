import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';



const PostIndexItem = props => {
    const {post} = props;
    const {author} = props;
    let date = new Date(post.created_at);
    return (
    <div className='post-item'>
    <li>
     <div className='post-item-title'>
      <img className="post-avatar" />
      <div className="author">
      <p>{author.first_name} {author.last_name}</p>
        <div className="post-date">
        <p>{date.toDateString()}</p>
        <p>{author.location}</p></div>
       </div> 
     </div>
     <p>{post.body}</p>
    </li>

    <div className='post-item-icons'>
    <button className='like-button'>
       <FontAwesomeIcon className='icon-like' icon={faThumbsUp} />
        Like                     
    </button>
    <button className='comment-button'>
       <FontAwesomeIcon className='icon-like' icon={faCommentAlt} />
        Comment                  
    </button>
    </div>
    </div>

  )};
  
  export default PostIndexItem;