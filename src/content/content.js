import React from 'react';
import Background from './background/background';
import Info from './info/info';
import NewPost from './posts/newPost/newPost';
import s from './content.module.css'
import Post from './posts/post/post';



const Content = (props) => {
  
  let postsData = props.posts.map( p => (<Post title={p.title} id={p.id} name={p.name} text={p.text}/>))
  return(
    <div className={s.container}>
      <div className={s.header}>
        <Info/>
        <Background/>
      </div>
      <div className={s.wrap}>
        <NewPost title="My post"/>
        {postsData}
      </div>
    </div>
  );
}
export default Content;
