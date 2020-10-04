import React from 'react';
import AvatarPost from './avatar/avatar';
import s from './post.module.css';
const Post = (props) => {
return(
  <div className={s.post}>
    <div className={s.info}>
      <AvatarPost/>
      <div className={s.container}>
        <a href="#s" className={s.name}>{props.name}</a>
      </div>
    </div>
    <div className={s.text}>
      <div className={s.title}>
        {props.title}
      </div>
      <div className={s.body}>
        {props.text}
      </div>
    </div>
  </div>
);
}
export default Post;