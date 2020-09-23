import React from 'react';
import Button from '../../../button/button';
import s from './newPost.module.css';


const NewPost = (props) => {

  let addPostFunc =() => {
    props.addPost();
  }
  let ChangePostFunc = (e) =>{
    let text = e.target.value;
    props.updateNewPostText(text);
  }
return(
  <div className={s.post}>
    <h1>{props.title}</h1>
      <textarea onChange={ChangePostFunc} value={props.newPostText} type="textarea"  placeholder="Расскажите что у вас новенького?"/>
      <Button function={addPostFunc} name='Опубликовать'/>
  </div>
);
}
export default NewPost;