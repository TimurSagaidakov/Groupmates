import React from 'react';
import OneMessage from './../oneMessage/oneMessage';
import s from'./unreadMessages.module.css';
const UnreadMessages = (props) => {
  let unreadMessagesData =
   props.unreadMessages.map(message => <OneMessage name={message.name} avatar={message.avatar} message={message.message} id={message.id}/>)
return(
  <div className={s.container}>
    {unreadMessagesData}
  </div>
);
}
export default UnreadMessages;