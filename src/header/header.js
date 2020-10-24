import React from 'react';
import logo from './logo.png';
import s from './header.module.css'
import { NavLink } from 'react-router-dom';
import Button from '../button/button';
const Header = ({myId,login,logout,isAuth}) =>{
  return(
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="логотип" />
      </div>
      <div className={s.name}>
        Одноклубники
      </div>
      <div className={s.login}>
        {isAuth
          ? 
        <div className={s.loginNav}>
          <NavLink to={'/profile/' + myId} className={s.userName}>{login}</NavLink>
          <Button name='Выйти' function={logout}/>
        </div>
          :
        <NavLink to={'/login'}>Войти</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;