import React from 'react';
import avatar  from './avatar.jpg';
import s from './avatar.module.css';
const Avatar = () => {
return(
  <div className={s.avatar}>
    <img src={avatar} alt="" />
  </div>
);
}
export default Avatar;