import React from 'react';
import logo from './img/logo.png';
const Header = () =>{
  return(
    <header className="header">
      <div className="logo">
        <img src={logo} alt="логотип" />
      </div>
    </header>
  )
}

export default Header;