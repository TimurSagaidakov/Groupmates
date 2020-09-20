import React from 'react';
import s from './button.module.css'
const Button = (props) => {
return(
<button className={s.button} type="submit" onClick={props.function}>{props.name}</button>
);
}
export default Button;