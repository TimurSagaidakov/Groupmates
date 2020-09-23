import React from 'react';
import s from'./allMessages.module.css';
import OneMessageContainer from '../oneMessage/oneMessageContainer';

const AllMessages = (props) => {
return(
  <div className={s.container}>
    <OneMessageContainer/>
  </div>
);
}
export default AllMessages;