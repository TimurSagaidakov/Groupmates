import React from 'react';
import StoreContext from '../../../storeContext';
import {addPostActionCreator, updateNewPostText} from './../../../redux/homeReducer';
import NewPost from './newPost';

const NewPostContainer = (props) => {

  
return(
    <StoreContext.Consumer> 
      {(store) =>{
        let addPost =() => {
          let action = addPostActionCreator();
          store.dispatch( action);
        }
        let onChangePost = (text) =>{
          let action = updateNewPostText(text)
          store.dispatch(action);
          }
        return <NewPost newPostText={store.getState().home.newPostText} updateNewPostText={onChangePost} addPost={addPost}/>

      }}
    </StoreContext.Consumer>
);
}
export default NewPostContainer;