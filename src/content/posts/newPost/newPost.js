import React from 'react';
import Button from '../../../button/button';
import s from './newPost.module.css';

import {addPostActionCreator, updateNewPostText} from './../../../redux/state';
const NewPost = (props) => {
  let newPostElement = React.createRef();
  let action = addPostActionCreator();
  let addPost =() => {
    props.dispatch( action);
  }
  let onChangePost = () =>{
    let text = newPostElement.current.value;
    let action = updateNewPostText(text)
    props.dispatch(action);
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