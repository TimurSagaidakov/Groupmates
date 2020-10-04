import React from 'react';
import s from'./allMessages.module.css';
import Button from './../../button/button';
import OneMessage from '../oneMessage/oneMessage';

const AllMessages = (props)=>{
return <div className={s.container}>
        {props.allMessages.map( m => <OneMessage  name={m.name} 
                                                  key={m.id} 
                                                  id={m.id} 
                                                  message ={m.message}
                                                  avatar={m.avatar} /*Передаем данные state */ />)}
        <div className={s.enter_text}>
        <textarea onChange={props.updateMessageFunc}
                  value={props.newMessageBody}
                  className={s.input}
                  placeholder="Напишите сообщение.."/>
        <Button   function={props.addMessageFunc} 
                  name="Отправить"
                  className={s.button}/>
        </div>
      </div>
}
export default AllMessages;
