import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./friendList.module.css';

const Friend = (props) => {
return(
  <div className={s.container}>
    <div className={s.friend}>
      <div className={s.avatar}>
        <img src={props.avatar} alt=''/>
      </div>
      <div className={s.name}>
        <NavLink to={'/profile/' + props.id} >
          {props.name}
        </NavLink>
      </div>
    </div>
  </div>
);
}
export default Friend;