import React from 'react';
import s from'./time.module.css';

const Time = (props) => {
return(
  <div className={s.time}>
    <span className={s.day}>{props.day}</span>
    <span className={s.month}>{props.month}</span>
    <span className={s.current_time}>{props.current_time}</span>
  </div>
);
}
export default Time;