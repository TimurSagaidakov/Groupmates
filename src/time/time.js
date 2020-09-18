import React from 'react';
import s from'./time.module.css';
const Time = () => {
return(
  <div className={s.time}>
    <span className={s.day}>24</span>
    <span className={s.month}>Июнь</span>
    <span className={s.current_time}>19:42</span>
  </div>
);
}
export default Time;