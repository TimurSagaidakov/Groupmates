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
          <Main state={props.state}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
