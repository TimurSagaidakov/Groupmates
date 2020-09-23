import React from 'react';
import Background from './background/background';
import Info from './info/info';
import NewPostContainer from './posts/newPost/newPostContainer';
import s from './content.module.css'
import Post from './posts/post/post';

const Content = (props) => {

  let timeArray=[
    {day: '24', month: 'Июнь', current_time: '19:42'},
  ]
  let postsData = props.store.getState().home.posts.map( p => (<Post title={p.title} id={p.id} name={p.name} text={p.text} timeArray={timeArray}/>))
  return(
    <div className={s.container}>
      <div className={s.header}>
        <Info/>
        <Background/>
      </div>
      <div className={s.wrap}>
        <NewPostContainer title="Новый пост" store={props.store}/>
        {postsData}
      </div>
    </div>
  );
}
export default Content;
