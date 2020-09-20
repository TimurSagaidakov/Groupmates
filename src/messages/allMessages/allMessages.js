import React from 'react';
import s from'./allMessages.module.css';
import OneMessage from '../oneMessage/oneMessage';

const AllMessages = (props) => {
  
  
  let OneMessageNameEl = props.allMessages.map( m => <OneMessage name={m.name} id={m.id} message ={m.message} avatar={m.avatar} allMessages={props.allMessages} />)
return(
  <div className={s.container}>
    {OneMessageNameEl}
  </div>
);
}
export default AllMessages;