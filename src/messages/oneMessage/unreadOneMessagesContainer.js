import React from 'react';
import StoreContext from '../../storeContext';
import {updateNewMessageCreator, newMessageCreator} from './../../redux/messagesReducer';
import OneMessage from './oneMessage';
const UnreadOneMessageContainer = (props) => {

  
  return(
    <StoreContext>
      {store =>{
        let  addMessage= () =>{
          let action = newMessageCreator();
          store.dispatch(action)
        }
        let  updateMessage = (message) =>{
          let action =  updateNewMessageCreator(message); /* локальная переменная для action Creator'а */
          store.dispatch(action); /*Вытаскиваем action из всего dispatch'a */
        }
        let state = store.getState(); /* Вытаскиваем данные из state */
        let OneMessageNameEl = state.messages.unreadMessages.map( m => <OneMessage name={m.name} id={m.id} 
          message ={m.message} avatar={m.avatar} 
          newMessageCreator={addMessage} /* Передаем в action creator созданную функцию */ 
          updateNewMessageCreator={updateMessage} /* Передаем в action creator созданную функцию */ 
          allMessages={props.allMessages} /*Передаем данные state */ />)

          return <div>
                  {OneMessageNameEl}
                </div>
      }}
    </StoreContext>
    
  );  
}
export default UnreadOneMessageContainer;