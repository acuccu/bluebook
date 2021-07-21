import React from 'react';
import {Link} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp } from '@fortawesome/free-solid-svg-icons';



const PostItem = props => {
    const {post} = props;
    const {users} = props;
    const deletePost = props.deletePost.bind(this);
    const {currentUserId} = props;
    const {createLike} = props;
    const {deleteLike} = props;
    const editPost = props.editPost;
    let date = new Date(post.created_at);
    return (
    <div className='post-item' >
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
      {post.likes.includes(currentUserId) ? 
      <button className='like' onClick={()=>deleteLike(currentUserId, post.id)}><FontAwesomeIcon className='unlikeIcon' icon={faThumbsDown} />Unlike</button> : 
      <button className='like' onClick={()=>createLike(currentUserId, post.id)}><FontAwesomeIcon className='likeIcon'icon={faThumbsUp} />Like</button>}
      <div className='like-list'>{likesWording(post.likes, users)}</div>
    </div>
    
    </div>

  )};

  const likesWording = (likesArr, users) => {
    if (likesArr.length === 0) {
      return '';
    } else if (likesArr.length === 1) {
      let userId = likesArr[0];
      let user = users[userId];
      return (<><Link className='like-link' to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link> liked the post</>)
    } else if (likesArr.length === 2) {
      let user1 = users[likesArr[0]];
      let user2 = users[likesArr[1]];
      return (<><Link className='like-link' to={`/users/${user1.id}`}>{user1.first_name} {user1.last_name}</Link> and <Link className='like-link2' to={`/users/${user2.id}`}>{user2.first_name} {user2.last_name}</Link> liked the post</>)
    } else {
      let user = users[likesArr[0]];
      return (<><Link className='like-link' to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link> and {likesArr.length} liked the post</>)
    }
  }
  
  export default PostItem;