import React from 'react';
import Button from './../../button/button';
import OneMessage from '../oneMessage/oneMessage';

import s from'./importantMessages.module.css';
const ImportantMessages = (props) => {
  return <div className={s.container}>
  {props.importantMessages.map( m => 
  <OneMessage name={m.name} 
              key={m.id} 
              id={m.id} 
              message ={m.message}
              avatar={m.avatar}
              importantMessages={props.importantMessages} /*Передаем данные state */ />
    )
  }
  <div className={s.enter_text}>
    <textarea onChange={props.updateMessageFunc} value={props.newMessageBody} className={s.input} placeholder="Напишите сообщение.."/>
    <Button function={props.addMessageFunc1} name="Отправить" className={s.button}/>
  </div>
</div>
}
export default ImportantMessages;