import React from 'react';
import Button from '../../../button/button';
import s from './newPost.module.css';
const NewPost = (props) => {
return(
  <div className={s.post}>
    <h1>{props.title}</h1>
    <form >
      <textarea type="textarea" placeholder="your news..." />
      <Button/>
    </form>
  </div>
);
}
export default NewPost;