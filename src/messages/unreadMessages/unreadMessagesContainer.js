import {updateNewMessageCreator, newUnreadMessageCreator} from './../../redux/messagesReducer';
import UnreadMessages from './unreadMessages';
import {connect} from 'react-redux';
import React from 'react';
class UnreadMessagesContainer extends React.Component {
  addMessageFunc1= () =>{
    this.props.newUnreadMessageCreator(); 
  }
  updateMessageFunc = (e) =>{
    let message = e.target.value;
    this.props.updateNewMessageCreator(message);
}
render(){
  return <UnreadMessages addMessageFunc1={this.addMessageFunc1} 
                          updateMessageFunc={this.updateMessageFunc}
                          unreadMessages={this.props.unreadMessages}
                          newMessageBody={this.props.newMessageBody} />
  }
}
let mapStateToProps = (state) =>{
  return{
    unreadMessages : state.messages.unreadMessages, /*Передаю в пропсы массив данных */
    newMessageBody: state.messages.newMessageBody /* Передаю в UI компоненту переменную для записи в массив */
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewMessageCreator : (message) =>{
      let action =  updateNewMessageCreator(message); /* локальная переменная для action Creator'а */
        dispatch(action); /*Вытаскиваем action из всего dispatch'a */
    },
    newUnreadMessageCreator : () => {
      let action = newUnreadMessageCreator();
        dispatch(action)
    } 
  }
}
const unreadMessagesContainer = connect(mapStateToProps,mapDispatchToProps)(UnreadMessagesContainer)
export default unreadMessagesContainer;