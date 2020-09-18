import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./rightMenuMessage.module.css';
const RightMenuMessage = (props) => {
return(
  <div className={s.container}>
    <ul>
      <li><NavLink to="/allMessages" activeClassName={s.active}>Все сообщения </NavLink></li>
      <li><NavLink to="/unreadMessages" activeClassName={s.active}>Непрочитанные</NavLink></li>
      <li><NavLink to="/importantMessages" activeClassName={s.active}>Важные сообщения</NavLink></li>
    </ul>
  </div>
);
}
export default RightMenuMessage;