import {newMessageCreator} from './../../redux/messagesReducer';
import AllMessages from './allMessages';
import {connect} from 'react-redux';
import React from 'react';
import {reset} from 'redux-form';


class AllMessagesContainer extends React.Component {
  addMessageFunc= (message) =>{
  this.props.newMessageCreator(message); 
  this.props.reset('Message')
}
  
render(){
  return <AllMessages addMessageFunc={this.addMessageFunc}
                      //updateMessageFunc={this.updateMessageFunc}
                      allMessages={this.props.allMessages}
                      newMessageBody={this.props.newMessageBody} />
  }
}
let mapStateToProps = (state) =>{
  return{
    allMessages: state.messages.allMessages, /* Передаем массив данных в пропсы UI компоненты */
    newMessageBody: state.messages.newMessageBody /*Передаем переменную для записи в пропсы UI компоненты */
  }
}



export default connect(mapStateToProps, {newMessageCreator,reset})(AllMessagesContainer)