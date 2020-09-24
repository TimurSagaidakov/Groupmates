import React from 'react';
import StoreContext from '../../storeContext';
import {updateNewMessageCreator, newMessageCreator} from './../../redux/messagesReducer';
import AllMessages from './allMessages';
const AllMessagesContainer = (props) => {
  
  return(
    <StoreContext.Consumer>
      { store =>{
        let  addMessage= () =>{
        let action = newMessageCreator();
        store.dispatch(action)
      }
      let  updateMessage = (message) =>{
        let action =  updateNewMessageCreator(message); /* локальная переменная для action Creator'а */
        store.dispatch(action); /*Вытаскиваем action из всего dispatch'a */
      }
      return  <div>
                <AllMessages allMessages={props.allMessages} 
                newMessageCreator={addMessage} /* Передаем в action creator созданную функцию */ 
                updateNewMessageCreator={updateMessage} /* Передаем в action creator созданную функцию */ />
              </div>
      }}
      </StoreContext.Consumer>
  );  
}
export default AllMessagesContainer;