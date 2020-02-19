import React from 'react';

const PostIndexItem = props => {
    const {post} = props;
    const {author} = props;
    let date = Date.new(post.created_at);
    return (
    <li>
     <img className="post-avatar" />
     <p>{author.first_name} {author.last_name}</p>
     <p>{date.format("mm/dd/yy")}</p>
     <p>{author.location}</p>
     <p>{post.body}</p>
    </li>
  )};
  
  export default PostIndexItem;