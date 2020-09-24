import React from 'react';
import StoreContext from '../../storeContext';
import {updateNewMessageCreator, newUnreadMessageCreator} from './../../redux/messagesReducer';
import UnreadMessages from './unreadMessages';
const UnreadMessagesContainer = (props) => {
  
  return(
    <StoreContext.Consumer>
      { store =>{
        let  addMessage= () =>{
        let action = newUnreadMessageCreator();
        store.dispatch(action)
      }
      let  updateMessage = (message) =>{
        let action =  updateNewMessageCreator(message); /* локальная переменная для action Creator'а */
        store.dispatch(action); /*Вытаскиваем action из всего dispatch'a */
      }
      return  <div>
                <UnreadMessages unreadMessages={props.unreadMessages} 
                newUnreadMessageCreator={addMessage} /* Передаем в action creator созданную функцию */ 
                updateNewMessageCreator={updateMessage} /* Передаем в action creator созданную функцию */ />
              </div>
      }}
      </StoreContext.Consumer>
  );  
}
export default UnreadMessagesContainer;