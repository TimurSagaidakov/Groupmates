import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';

/* Склеиваем все reducer'ы в одну переменную*/
let reducers = combineReducers({
  home : homeReducer,
  messages : messagesReducer,
  sidebar: sidebarReducer
}) 
let store = createStore(reducers); /* store создает внутри себя эти три свойства из массива как  в нашем store */


export default store;