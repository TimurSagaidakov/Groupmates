import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './../../button/button';
import s from'./oneMessage.module.css';
const OneMessage = (props) => {
  
  let  addMessageFunc= () =>{
    props.newMessageCreator(); 
  }
  let  updateMessageFunc = (e) =>{
    let message = e.target.value;
    props.updateNewMessageCreator(message);
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
        <textarea onChange={updateMessageFunc} value={props.newMessageBody} className={s.input} placeholder="Напишите сообщение.."/>
        <Button function={addMessageFunc} name="Отправить" className={s.button}/>
      </div>
    </div>
  </div>
);  
}
export default OneMessage;