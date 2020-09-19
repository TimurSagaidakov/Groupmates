import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import avatar from './messages/userAvatar.jpg';
import avatarEnot from './messages/avatarEnot.jpg';
import avatarCat from './messages/avatarCat.jpg';
import avatarMusic from './messages/avatarMusic.webp';

let unreadMessages = [
  {id: '1' , name: 'Петр Первый' , avatar: avatar, message: 'Где Европа?'},
  {id: '2' , name: 'Рузвельт' , avatar: avatarCat, message: 'How are you?'},
  {id: '3' , name: 'Михалыч' , avatar: avatarEnot, message: 'Наша раша'},
  {id: '4' , name: 'Морковка' , avatar: avatar, message: 'Раз два перец'},
];
let allMessages = [
  { id:1, name: 'Петька', message: 'Я сегодня не смогу', avatar: avatarCat },
  { id:2, name: 'Васька', message: 'Ты где?', avatar: avatarMusic },
  { id:3, name: 'Илюшка', message: 'Я очень жду', avatar:avatar },
  { id:4, name: 'Без ника', message: 'Спам', avatar: avatarEnot },
];
let posts = [
  {id: '1', title: 'Какой то старый пост' , name: 'Тимур' , text: 'Сообщение поста' },
  {id: '2', title: 'Еще один старый пост' , name: 'Володя' , text: 'Сообщение поста' },
  {id: '3', title: 'Первый пост' , name: 'Паша' , text: 'Сообщение поста' },
  
]
ReactDOM.render(
    <App unreadMessages={unreadMessages} allMessages={allMessages} posts={posts}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

