import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FriendListContainer from './friendList/friendListContainer';
import s from './sidebar.module.css';
const Sidebar = (props) => {
  return(
      <div className={s.container}>
        <nav className={s.sidebar}>
          <ul>
            <li>
              <NavLink to={'/profile/' + props.myId} activeClassName={s.active}>Моя страница</NavLink>
            </li>
            <li>
              <NavLink to="/messages" activeClassName={s.active}>Сообщения</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName={s.active}>Все пользователи</NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.title_friends}>Список друзей</div>
        <FriendListContainer/>
      </div>
  );
}
let mapStateToProps =(state)=>{
  return {myId: state.auth.id}
}
export default connect(mapStateToProps)(Sidebar);