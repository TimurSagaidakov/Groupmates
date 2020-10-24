import React from 'react';
import './App.css';
import HeaderContainer from './header/headerContainer';
import Main from './main/main';
import store from './redux/redux-store'; /*Импорт БД */
import { BrowserRouter } from 'react-router-dom'; /* Импорт модуля перехода между линками без перезагрузки */
import {Provider} from 'react-redux'; /* Импорт Provider'a из библиотеки react-redux */

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


let MainApp =()=>{
  return <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
}
export default MainApp