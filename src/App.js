import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './header/header';
import Main from './main/main';



function App(props) {
  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <Header/>
          <Main unreadMessages={props.unreadMessages} allMessages={props.allMessages} posts={props.posts}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
