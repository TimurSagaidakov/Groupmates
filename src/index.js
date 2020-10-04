import React from 'react'; /*Импорт react modules */
import ReactDOM from 'react-dom'; 
import './index.css'; 
import store from './redux/redux-store'; /*Импорт БД */
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; /* Импорт модуля перехода между линками без перезагрузки */
import {Provider} from 'react-redux'; /* Импорт Provider'a из библиотеки react-redux */

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

