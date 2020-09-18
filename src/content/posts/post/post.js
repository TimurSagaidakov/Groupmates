import React from 'react';
import Time from '../../../time/time';
import Name from '../../personal/name/name';
import AvatarPost from './avatar/avatar';
import s from './post.module.css';
const Post = () => {
return(
  <div className={s.post}>
    <div className={s.info}>
      <AvatarPost/>
      <div className={s.container}>
        <a href="#s"><Name name='Тимур Сагайдаков'/></a>
        <Time/>  
      </div>
    </div>
    <div className={s.text}>
      <div className={s.title}>
        Привет друзья!
      </div>
      <div className={s.body}>
        Признаться честно, изначально я задумывал копировать чужие шаблоны со стоков и просто переделывать их под Фигму. Но вскоре понял, что дело это крайне неэтичное. Если и копировать, то только как советует Остин Клеон в книге "Кради как художник" –вдохновляться и заимствовать идеи, а не копировать! А ещё лучше – улучшать.
      </div>
    </div>
  </div>
);
}
export default Post;