import avatar from './../messages/userAvatar.jpg';
import avatarEnot from './../messages/avatarEnot.jpg';
import avatarCat from './../messages/avatarCat.jpg';
import avatarMusic from './../messages/avatarMusic.webp';

/* action type переменные */
const newMessageBodyType = 'NEW-MESSAGE-BODY',
  sendMessageType = 'SEND-MESSAGE';
const messagesReducer = (state, action) => {
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