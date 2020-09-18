import React from 'react';
import './App.css';
import Header from './header/header';
import Main from './main/main';



function App() {
  return (
    <div>
      <div className="container">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;