import React from 'react';
import Button from '../../../button/button';
import s from './newPost.module.css';

import {addPostActionCreator, updateNewPostText} from './../../../redux/homeReducer';

const NewPost = (props) => {

  let action = addPostActionCreator();
  let addPost =() => {
    props.dispatch( action);
  }
  let onChangePost = (e) =>{
    let text = e.target.value;
    let action = updateNewPostText(text)
    props.dispatch(action);
  }
return(
  <div className={s.post}>
    <h1>{props.title}</h1>
      <textarea onChange={onChangePost} value={props.newPostText} type="textarea"  placeholder="Расскажите что у вас новенького?"/>
      <Button function={addPost} name='Опубликовать'/>
  </div>
);
}
export default NewPost;