import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./rightMenuMessage.module.css';
const RightMenuMessage = (props) => {
return(
  <div className={s.container}>
    <ul>
      <li><NavLink to="/messages/allMessages" activeClassName={s.active}>Все сообщения </NavLink></li>
      <li><NavLink to="/messages/unreadMessages" activeClassName={s.active}>Непрочитанные</NavLink></li>
      <li><NavLink to="/messages/importantMessages" activeClassName={s.active}>Важные сообщения</NavLink></li>
    </ul>
  </div>
);
}
export default RightMenuMessage;