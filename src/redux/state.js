import avatar from './../messages/userAvatar.jpg';
import avatarEnot from './../messages/avatarEnot.jpg';
import avatarCat from './../messages/avatarCat.jpg';
import avatarMusic from './../messages/avatarMusic.webp';
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
      ]
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
    return this._state;
  },
  _callSubscriber(){
    
  },
  subscribe (observer){
    this._callSubscriber = observer;
},
dispatch(action) {
  if (action.type === 'ADD-POST'){
    let newPost = {
      id: 4,
      title: 'Abrakadabra',
      name: 'pokemon',  
      text: this._state.home.newPostText
      };
      this._state.home.posts.push(newPost);
      this._state.home.newPostText = '';
      this._callSubscriber(this._state);
  } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
    this._state.home.newPostText = action.newText;
    this._callSubscriber(this._state);
  }
}

}


export const addPostActionCreator = () =>{
  return {
    type: 'ADD-POST'
  }
}
export const updateNewPostText = (text) =>{
  return{
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}

export default store;