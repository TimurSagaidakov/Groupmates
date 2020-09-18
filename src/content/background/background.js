import React from 'react';
import background from './bg.jpg';
import s from './background.module.css';
const Background = () => {
  return(
    <div className={s.background}>
      <img src={background} alt="" />
    </div>
  );
}
export default Background;