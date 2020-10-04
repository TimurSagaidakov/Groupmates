import React from 'react';
import Button from '../../../button/button';
import s from './newPost.module.css';

const NewPost = (props) =>{
return <div className={s.post}>
    <h1>{props.title}</h1>
      <textarea onChange={props.ChangePostFunc} value={props.newPostText} type="textarea"  placeholder="Расскажите что у вас новенького?"/>
      <Button function={props.addPostFunc} name='Опубликовать'/>
  </div>
}
export default NewPost;