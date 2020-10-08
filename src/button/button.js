import React from 'react';
import s from './button.module.css';
import cn from 'classnames';
const Button = (props) => {  
return(
<button className={cn(s.button)} type="submit" onClick={props.function}>
  {props.name}</button>
);
}
export default Button;