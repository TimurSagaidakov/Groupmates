import React from 'react';
import Button from '../button';
const Post = () => {
return(
  <div className="post">
    <h1 className="post-title">
      My posts
    </h1>
    <form >
      <textarea type="textarea" className="post-input" placeholder="your news..." />
      <Button/>
    </form>
  </div>
);
}
export default Post;