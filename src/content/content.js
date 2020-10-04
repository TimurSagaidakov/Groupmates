import React from 'react';
import NewPostContainer from './posts/newPost/newPostContainer';
import s from './content.module.css'
import PostContainer from './posts/post/postContainer';
import Profile from './profile/profile';

const Content = (props) => {

 return(
      <div className={s.container}>
        <Profile/>
      <div className={s.wrap}>
        <NewPostContainer/>
        <PostContainer/>
      </div>
    </div>
      )
}
export default Content;
