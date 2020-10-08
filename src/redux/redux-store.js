import {applyMiddleware, combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

/* Склеиваем все reducer'ы в одну переменную*/
let reducers = combineReducers({
  home : homeReducer, /*Соотношение ветки state к каждому reducer'у */
  messages : messagesReducer, /*Соотношение ветки state к каждому reducer'у */
  sidebar: sidebarReducer, /*Соотношение ветки state к каждому reducer'у */
  usersList: usersReducer, /* страница пользователей */
  auth: authReducer /*Авторизация пользователя */
}) 

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); /* store создает внутри себя эти три свойства из массива как  в нашем store */

window.store = store;

export default store;