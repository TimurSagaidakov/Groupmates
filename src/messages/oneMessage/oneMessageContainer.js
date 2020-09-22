import React from 'react';
import {updateNewMessageCreator, newMessageCreator} from './../../redux/messagesReducer';
import OneMessage from './oneMessage';

const oneMessageContainer = (props) => {
  
  let action = newMessageCreator();
  let  addMessage= () =>{
    props.dispatch(action)
  }
  let  updateMessage = (e) =>{
    let message = e.target.value;
    let action =  updateNewMessageCreator(message);
    props.store.dispatch(action);
}
  return(
    <OneMessage addMessage={props.addMessage} updateMessage={props.updateMessage} messages=/>
);  
}
export default oneMessageContainer;