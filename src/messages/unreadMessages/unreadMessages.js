import React from 'react';
import avatar from './../userAvatar.jpg';
import avatarEnot from './../avatarEnot.jpg';
import avatarCat from './../avatarCat.jpg';
import OneMessage from './../oneMessage/oneMessage';
import s from'./unreadMessages.module.css';
const UnreadMessages = (props) => {
return(
  <div className={s.container}>
    <OneMessage name="Петр Первый" avatar={avatar} message="Где Европа?"/>
    <OneMessage name="Рузвельт" avatar={avatarCat} message="How are you?"/>
    <OneMessage name="Михалыч" avatar={avatarEnot} message="Наша раша" />
  </div>
);
}
export default UnreadMessages;