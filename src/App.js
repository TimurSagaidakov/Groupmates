import React from 'react';
import './App.css';
import HeaderContainer from './header/headerContainer';
import Main from './main/main';
function App(props) {
  return (
      <div>
        <div className="container">
          <HeaderContainer/>
          <Main/>
        </div>
      </div>
  );
}

export default App;
