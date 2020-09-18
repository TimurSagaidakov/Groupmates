import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './sidebar.module.css';
const Sidebar = () => {
  return(
      <nav className={s.sidebar}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={s.active}>Моя страница</NavLink>
          </li>
          <li>
            <NavLink to="/messages" activeClassName={s.active}>Сообщения</NavLink>
          </li>
          <li><a href="/news">Новости</a></li>
          <li><a href="/music">Музыка</a></li>
          <li><a href="/settings">Настройки</a></li>
        </ul>
      </nav>
  );
}
export default Sidebar;