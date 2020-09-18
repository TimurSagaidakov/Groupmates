import React from 'react';
import s from './name.module.css';
const Name = (props) => {
return(
  <div className={s.name}>{props.name}</div>
);
}
export default Name;