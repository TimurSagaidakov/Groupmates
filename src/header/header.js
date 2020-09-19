import React from 'react';
import logo from './logo.png';
import s from './header.module.css'
const Header = () =>{
  return(
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="логотип" />
      </div>
      <div className={s.name}>
        Одноклубники
      </div>
    </header>
  )
}

export default Header;