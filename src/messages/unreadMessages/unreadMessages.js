import React from 'react';
import s from'./unreadMessages.module.css';
import Button from './../../button/button';
import OneMessage from '../oneMessage/oneMessage';

const UnreadMessages =(props) =>{
  return <div className={s.container}>
      {props.unreadMessages.map( m => 
      <OneMessage name={m.name} 
                  key={m.id} 
                  id={m.id} 
                  message ={m.message}
                  avatar={m.avatar}
                  unreadMessages={props.unreadMessages} /*Передаем данные state */ />
        )
      }
      <div className={s.enter_text}>
        <textarea onChange={props.updateMessageFunc} value={props.newMessageBody} className={s.input} placeholder="Напишите сообщение.."/>
        <Button function={props.addMessageFunc1} name="Отправить" className={s.button}/>
      </div>
    </div>
}

export default UnreadMessages;