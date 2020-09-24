import React from 'react';
import s from'./unreadMessages.module.css';
import StoreContext from '../../storeContext';
import Button from './../../button/button';
import OneMessage from '../oneMessage/oneMessage';

const UnreadMessagesContainer = (props) => {
  return(

  <StoreContext.Consumer>
    {store =>{
      let  addMessageFunc1= () =>{
        props.newUnreadMessageCreator(); 
      }
      let  updateMessageFunc = (e) =>{
        let message = e.target.value;
        props.updateNewMessageCreator(message);
    }
      let OneMessageNameEl = store.getState().messages.unreadMessages.map( m => <OneMessage name={m.name} id={m.id} 
        message ={m.message} avatar={m.avatar} 
        unreadMessages={props.unreadMessages} /*Передаем данные state */ />)
    return(
      <div className={s.container}>
        {OneMessageNameEl}
        <div className={s.enter_text}>
        <textarea onChange={updateMessageFunc} value={props.newMessageBody} className={s.input} placeholder="Напишите сообщение.."/>
        <Button function={addMessageFunc1} name="Отправить" className={s.button}/>
      </div>
      </div>
    )
    }}
  </StoreContext.Consumer>
  )
}
export default UnreadMessagesContainer;