import avatar from './../messages/userAvatar.jpg';
import avatarEnot from './../messages/avatarEnot.jpg';
import avatarCat from './../messages/avatarCat.jpg';
import avatarMusic from './../messages/avatarMusic.webp';
import Avatar from './../content/avatar/avatar.jpg';

/* action type переменные */
const sendMessageType = 'SEND-MESSAGE',
      unreadNewMessage = 'UNREAD-NEW-MESSAGE'

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
  ]
}
const messagesReducer = (state = initialState , action) => {
  switch (action.type) {
    case sendMessageType: {
      let newMessageText = {
        id: 5,
        name: 'Новый',
        message: action.message,
        avatar: Avatar
      }
      return{...state, /*возвращаем новый state */
        allMessages: [...state.allMessages, newMessageText], /*Пушим полученное значение в массив, который выводится на экран */
      }
    }
    case unreadNewMessage : {
      let newMessageText = {
        id: 5,
        name: 'Я',
        message: action.unreadMessage,
        avatar: Avatar
      }
      return{
        ...state,
        unreadMessages: [...state.unreadMessages, newMessageText]
      }
    } 
    default: {
      return state;
    }
  }
}
export const newMessageCreator =(message) => ( { type: sendMessageType,message  } ) /* Добавление нового сообщения в UI части */
export const newUnreadMessageCreator =(unreadMessage) => ( { type:  unreadNewMessage , unreadMessage} ) /* Добавление нового сообщения в UI части непрочитанные сообщения*/

export default messagesReducer;