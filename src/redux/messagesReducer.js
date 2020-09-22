import avatar from './../messages/userAvatar.jpg';
import avatarEnot from './../messages/avatarEnot.jpg';
import avatarCat from './../messages/avatarCat.jpg';
import avatarMusic from './../messages/avatarMusic.webp';

/* action type переменные */
const newMessageBodyType = 'NEW-MESSAGE-BODY',
  sendMessageType = 'SEND-MESSAGE';

let initialState = { /* Базы данных по умолчанию для redux, чтобы он брал начальные значения*/
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
}
const messagesReducer = (state = initialState , action) => {
  switch (action.type) {
    case newMessageBodyType: {
      state.newMessageBody = action.newMessage;
      return state;
    }
    case sendMessageType: {
      let newMessageText = {
        id: 5,
        name: 'Вася',
        message: state.newMessageBody,
        avatar: avatar
      }
      state.allMessages.push(newMessageText);
      state.newMessageBody = '';
      return state;
    }
    default: {
      return state;
    }
  }
}
export const updateNewMessageCreator = (message) => ( { type : newMessageBodyType, newMessage : message } ) /* Пушим сообщение в массив базы данных */
export const newMessageCreator =() => ( { type: sendMessageType  } ) /* Добавление нового сообщения в UI части */


export default messagesReducer;