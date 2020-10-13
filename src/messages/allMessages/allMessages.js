import React from 'react';
import s from'./allMessages.module.css';
import OneMessage from '../oneMessage/oneMessage';
import FormMessage from '../messagesForm';
import {reset} from 'redux-form'; //Зануление формы 



const AllMessages = (props)=>{
  const onSubmit =(values)=>{
    props.addMessageFunc(values.message)
    reset(values.message) //Зануление формы 
  }

return <div className={s.container}>
        {props.allMessages.map( m => <OneMessage  name={m.name} 
                                                  key={m.id} 
                                                  id={m.id} 
                                                  message ={m.message}
                                                  avatar={m.avatar} /*Передаем данные state */ />)}
        <div className={s.enter_text}>
          <FormMessage  onSubmit={onSubmit}/>  
        </div>
      </div>
}
export default AllMessages;
