import React from 'react';
import avatar from './../userAvatar.jpg';
import avatarCat from './../avatarCat.jpg'
import avatarMusic from './../avatarMusic.webp';
import avatarEnot from './../avatarEnot.jpg';
import s from'./allMessages.module.css';
import OneMessage from '../oneMessage/oneMessage';
const AllMessages = (props) => {
return(
  <div className={s.container}>
    <OneMessage name="Петька" message="Привет, как дела?" avatar={avatar}/>
    <OneMessage name="Васька" message="Я сегодня не смогу" avatar={avatarCat}/>
    <OneMessage name="Илюшка" message="Ты где?" avatar={avatarMusic}/>
    <OneMessage name="Без ника" message="Спам" avatar={avatarEnot} />
  </div>
);
}
export default AllMessages;