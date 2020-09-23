import React from 'react';
import Background from './background/background';
import Info from './info/info';
import NewPostContainer from './posts/newPost/newPostContainer';
import s from './content.module.css'
import Post from './posts/post/post';
import StoreContext from '../storeContext';

const Content = (props) => {

 return(
    <StoreContext.Consumer>
    { store => {
       let timeArray=[
        {day: '24', month: 'Июнь', current_time: '19:42'},
      ]
      let postsData = store.getState().home.posts.map( p => (<Post title={p.title} id={p.id} name={p.name} text={p.text} timeArray={timeArray}/>))
      
      return(
        <div className={s.container}>
      <div className={s.header}>
        <Info/>
        <Background/>
      </div>
      <div className={s.wrap}>
        <NewPostContainer/>
        {postsData}
      </div>
    </div>
      )
    }}
    </StoreContext.Consumer>
  );
}
export default Content;
