import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendList from './friendList/friendList';
import s from './sidebar.module.css';
const Sidebar = (props) => {
  let friendListData = props.state.friendList.map(f => <FriendList name={f.name} avatar={f.avatar} id={f.id}/>)
  return(
      <div className={s.container}>
        <nav className={s.sidebar}>
          <ul>
            <li>
              <NavLink to="/" activeClassName={s.active}>Моя страница</NavLink>
            </li>
            <li>
              <NavLink to="/messages" activeClassName={s.active}>Сообщения</NavLink>
            </li>
            <li>
              <NavLink to="/message/1" activeClassName={s.active}>Новости</NavLink>
            </li>
            <li><a href="/music">Музыка</a></li>
            <li><a href="/settings">Настройки</a></li>
          </ul>
        </nav>
        <div className={s.title_friends}>Список друзей</div>
      {friendListData}
      </div>
  );
}
export default Sidebar;