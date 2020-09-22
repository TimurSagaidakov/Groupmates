import React from 'react'; /*Импорт react modules */
import ReactDOM from 'react-dom'; 
import './index.css'; 
import store from './redux/store'; /*Импорт БД */
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; /* Импорт модуля перехода между линками без перезагрузки */

let rerender =(state) =>{ /*Перерисовка приложения */
  ReactDOM.render(
    <BrowserRouter>
    <App store={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
  document.getElementById('root')
);
}
rerender(store.getState()); /* Запуск функции перерисовки приложения, полученная от подписчика */
  
store.subscribe(rerender);  /*Первая отрисовка приложения */



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

