import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';

/* Склеиваем все reducer'ы в одну переменную*/
let reducers = combineReducers({
  home : homeReducer, /*Соотношение ветки state к каждому reducer'у */
  messages : messagesReducer, /*Соотношение ветки state к каждому reducer'у */
  sidebar: sidebarReducer /*Соотношение ветки state к каждому reducer'у */
}) 
let store = createStore(reducers); /* store создает внутри себя эти три свойства из массива как  в нашем store */


export default store;