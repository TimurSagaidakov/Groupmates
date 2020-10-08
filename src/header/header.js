import React from 'react';
import logo from './logo.png';
import s from './header.module.css'
import { NavLink } from 'react-router-dom';
const Header = (props) =>{
  return(
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="логотип" />
      </div>
      <div className={s.name}>
        Одноклубники
      </div>
      <div className={s.login}>
        {props.isAuth
          ? 
        <NavLink to='/profile' className={s.userName}>{props.login}</NavLink>
          :
        <NavLink to={'/login'}>Войти</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;