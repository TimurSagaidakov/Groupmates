import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <NavLink to={"/message/" + props.id} className={s.textMessage}>
        {props.message} 
      </NavLink>
    </div>
  </div>
);  
}
export default OneMessage;