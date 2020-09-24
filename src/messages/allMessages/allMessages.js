import React from 'react';
import s from'./allMessages.module.css';
import StoreContext from '../../storeContext';
import Button from './../../button/button';
import OneMessage from '../oneMessage/oneMessage';

const AllMessages = (props) => {
  return(

  <StoreContext.Consumer>
    {store =>{
      let  addMessageFunc= () =>{
        props.newMessageCreator(); 
      }
      let  updateMessageFunc = (e) =>{
        let message = e.target.value;
        props.updateNewMessageCreator(message);
    }
      let OneMessageNameEl = store.getState().messages.allMessages.map( m => <OneMessage name={m.name} id={m.id} 
        message ={m.message} avatar={m.avatar} /*Передаем данные state */ />)
    return(
      <div className={s.container}>
        {OneMessageNameEl}
        <div className={s.enter_text}>
        <textarea onChange={updateMessageFunc} value={props.newMessageBody} className={s.input} placeholder="Напишите сообщение.."/>
        <Button function={addMessageFunc} name="Отправить" className={s.button}/>
      </div>
      </div>
    )
    }}
  </StoreContext.Consumer>
  )
}
export default AllMessages;