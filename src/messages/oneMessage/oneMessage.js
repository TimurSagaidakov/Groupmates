import React from 'react';
import s from'./oneMessage.module.css';
const OneMessage = (props) => {
return(
  <div className={s.container}>
    <div className={s.userAvatar}>
      <img src={props.avatar} alt=""/>
    </div>
    <div className={s.wrap}>
      <div className={s.userName}>
        {props.name}
      </div>
      <div className={s.textMessage}>
        {props.message}
      </div>
    </div>
  </div>
);  
}
export default OneMessage;