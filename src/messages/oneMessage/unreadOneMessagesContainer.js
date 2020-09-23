import React from 'react';
import {updateNewMessageCreator, newMessageCreator} from './../../redux/messagesReducer';
import OneMessage from './oneMessage';
const UnreadOneMessageContainer = (props) => {

  let  addMessage= () =>{
    let action = newMessageCreator();
    props.store.dispatch(action)
  }
  let  updateMessage = (message) =>{
    let action =  updateNewMessageCreator(message); /* локальная переменная для action Creator'а */
    props.store.dispatch(action); /*Вытаскиваем action из всего dispatch'a */
}
  let state = props.store.getState();
  let OneMessageNameEl = state.messages.unreadMessages.map( m => <OneMessage name={m.name} id={m.id} 
    message ={m.message} avatar={m.avatar} 
    newMessageCreator={addMessage} /* Передаем в action creator созданную функцию */ 
    updateNewMessageCreator={updateMessage} /* Передаем в action creator созданную функцию */ 
    allMessages={props.allMessages} /*Передаем данные state */ />)
  return(
    <div>
      {OneMessageNameEl}
    </div>
  );  
}
export default UnreadOneMessageContainer;