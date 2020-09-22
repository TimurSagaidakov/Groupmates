import avatar from './../messages/userAvatar.jpg';
import avatarEnot from './../messages/avatarEnot.jpg';
import avatarCat from './../messages/avatarCat.jpg';
import avatarMusic from './../messages/avatarMusic.webp';

/*Импорт reducer'ов */
import sidebarReducer from './sidebarReducer';
import homeReducer from './homeReducer';
import messagesReducer from './messagesReducer';




/* База данных */
let store ={
  _state : {
    home : {
      posts : [
        {id: 1, title: 'Какой то старый пост' , name: 'Тимур' , text: 'Сообщение поста' },
        {id: 2, title: 'Еще один старый пост' , name: 'Володя' , text: 'Сообщение поста' },
        {id: 3, title: 'Первый пост' , name: 'Паша' , text: 'Сообщение поста' },
      ],
      newPostText : ''
    },
    messages : {
      allMessages : [
        { id:1, name: 'Петька', message: 'Я сегодня не смогу', avatar: avatarCat },
        { id:2, name: 'Васька', message: 'Ты где?', avatar: avatarMusic },
        { id:3, name: 'Илюшка', message: 'Я очень жду', avatar:avatar },
        { id:4, name: 'Без ника', message: 'Спам', avatar: avatarEnot },
      ],
      unreadMessages : [
        {id: '1' , name: 'Петр Первый' , avatar: avatar, message: 'Где Европа?'},
        {id: '2' , name: 'Рузвельт' , avatar: avatarCat, message: 'How are you?'},
        {id: '3' , name: 'Михалыч' , avatar: avatarEnot, message: 'Наша раша'},
        {id: '4' , name: 'Морковка' , avatar: avatar, message: 'Раз два перец'},
      ],
      newMessageBody: ''
    },
        sidebar: {
          friendList : [
            {name: 'Андрей' , avatar: avatarCat , id:'1'},
            {name: 'Алексей' , avatar: avatarMusic , id:'2'},
            {name: 'Маруся' , avatar: avatarEnot , id:'3'},
            {name: 'Пипетка' , avatar: avatar , id:'4'},
          ]
        }
  },
  getState(){
    return this._state; /*Перерисовка state*/
  },
  _callSubscriber(){
    /*Вызов подписчика*/
  },
  subscribe (observer){
    this._callSubscriber = observer; /*Присваивание подписчику observer;*/
},

/* Изменение массива данных ( базы данных ) state */
dispatch(action) {

  /* Присваивание массиву данных полученных из reducer */
  this._state.home = homeReducer(this._state.home, action); 
  this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  this._state.messages = messagesReducer(this._state.messages, action);

  /* Вызов подписчика после получения всех reducer'ов */
  this._callSubscriber(this._state);
  
  }
}

/* Экспорт всего документа state - базы данных */
export default store;