import React from 'react';
import {addPostActionCreator, updateNewPostText} from './../../../redux/homeReducer';
import NewPost from './newPost';

const NewPostContainer = (props) => {

  let addPost =() => {
    let action = addPostActionCreator();
    props.store.dispatch( action);
  }
  let onChangePost = (text) =>{
    let action = updateNewPostText(text)
    props.store.dispatch(action);
  }
return(
  <div>
    <NewPost newPostText={props.store.getState().home.newPostText} updateNewPostText={onChangePost} addPost={addPost}/>
  </div>
);
}
export default NewPostContainer;