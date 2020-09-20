import React from 'react';
import Button from '../../../button/button';
import s from './newPost.module.css';
const NewPost = (props) => {
  let newPostElement = React.createRef();
  let addPost =() => {
    props.addPost();
  }
  let onChangePost = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
return(
  <div className={s.post}>
    <h1>{props.title}</h1>
      <textarea onChange={onChangePost} value={props.newPostText} ref={newPostElement} type="textarea"  placeholder="Расскажите что у вас новенького?"/>
      <Button function={addPost} name='Опубликовать'/>
  </div>
);
}
export default NewPost;