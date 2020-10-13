import {newUnreadMessageCreator} from './../../redux/messagesReducer';
import UnreadMessages from './unreadMessages';
import {connect} from 'react-redux';
import React from 'react';
import {reset} from 'redux-form';

class UnreadMessagesContainer extends React.Component {
  addMessageUnread= (unreadMessage) =>{
    this.props.newUnreadMessageCreator(unreadMessage); 
    this.props.reset('Message') //Зануление формы 
  }
  
render(){
  return <UnreadMessages addMessageUnread={this.addMessageUnread} 
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

const unreadMessagesContainer = connect(mapStateToProps,{newUnreadMessageCreator,reset})(UnreadMessagesContainer)
export default unreadMessagesContainer;