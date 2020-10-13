import React from 'react';
import s from'./unreadMessages.module.css';
import OneMessage from '../oneMessage/oneMessage';
import FormMessage from '../messagesForm';





const UnreadMessages =(props) =>{
  const onSubmit=(values)=>{
    props.addMessageUnread(values.message)
  }
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
      <FormMessage onSubmit={onSubmit}/>
      
    </div>
}

export default UnreadMessages;