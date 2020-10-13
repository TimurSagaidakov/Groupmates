import React from 'react';
import OneMessage from '../oneMessage/oneMessage';
import s from'./importantMessages.module.css';
import FormMessage from '../messagesForm';

const ImportantMessages = (props) => {
  const onSubmit=(data)=>{
    props.addMessage(data.message)
  }
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
    <FormMessage onSubmit={onSubmit}/>
  </div>
</div>
}
export default ImportantMessages;