import React from 'react';
import Time from '../../../time/time';
import AvatarPost from './avatar/avatar';
import s from './post.module.css';
const Post = (props) => {
  
  let timeData = props.timeArray.map( t => <Time day={t.day} month={t.month} current_time={t.current_time}/>)
return(
  <div className={s.post}>
    <div className={s.info}>
      <AvatarPost/>
      <div className={s.container}>
        <a href="#s" className={s.name}>{props.name}</a>
        {timeData} 
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