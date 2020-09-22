import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './../../button/button';
import s from'./oneMessage.module.css';
import {updateNewMessageCreator, newMessageCreator} from './../../redux/messagesReducer';
const OneMessage = (props) => {
  
  let action = newMessageCreator();
  let  addMessage= () =>{
    props.dispatch(action)
  }
  let  updateMessage = (e) =>{
    let message = e.target.value;
    let action =  updateNewMessageCreator(message);
    props.dispatch(action);
}
  return(
    <div className={s.container}>
    <div className={s.userAvatar}>
      <img src={props.avatar} alt=""/>
    </div>
    <div className={s.wrap}>
      <div className={s.userName}>
        {props.name}
      </div>
      <NavLink to={"/messages/" + props.id} className={s.textMessage}>
        {props.message} 
      </NavLink>
      <div className={s.enter_text}>
        <textarea onChange={updateMessage} value={props.newMessageBody} className={s.input} placeholder="Напишите сообщение.."/>
        <Button function={addMessage} name="Отправить" className={s.button}/>
      </div>
    </div>
  </div>
);  
}
export default OneMessage;