import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import homeReducer from './homeReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'; 

/* Склеиваем все reducer'ы в одну переменную*/
let reducers = combineReducers({
  home : homeReducer, /*Соотношение ветки state к каждому reducer'у */
  messages : messagesReducer, /*Соотношение ветки state к каждому reducer'у */
  sidebar: sidebarReducer, /*Соотношение ветки state к каждому reducer'у */
  usersList: usersReducer, /* страница пользователей */
  auth: authReducer, /*Авторизация пользователя */
  form: formReducer, /* Redux form */
  app: appReducer
}) 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware))); //Для подключения redux devtools chrome 
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));  store создает внутри себя эти три свойства из массива как  в нашем store */

window._store_ = store;

export default store;