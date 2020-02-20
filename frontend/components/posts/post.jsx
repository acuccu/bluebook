import React from 'react';

const PostIndexItem = props => {
    const {post} = props;
    const {author} = props;
    let date = new Date(post.created_at);
    debugger
    return (
    <li>
     <img className="post-avatar" />
     <p>{author.first_name} {author.last_name}</p>
     <p>{date.toDateString()}</p>
     <p>{author.location}</p>
     <p>{post.body}</p>
    </li>
  )};
  
  export default PostIndexItem;