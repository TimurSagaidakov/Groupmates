import {updateNewMessageCreator, newMessageCreator} from './../../redux/messagesReducer';
import AllMessages from './allMessages';
import {connect} from 'react-redux';
import React from 'react';

class AllMessagesContainer extends React.Component {
  addMessageFunc= () =>{
  this.props.newMessageCreator(); 
}
  updateMessageFunc = (e) =>{
  let message = e.target.value;
  this.props.updateNewMessageCreator(message);
}
render(){
  return <AllMessages addMessageFunc={this.addMessageFunc}
                      updateMessageFunc={this.updateMessageFunc}
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

let mapDispatchToProps = (dispatch) =>{
  return{
    newMessageCreator : () =>{
      let action =  newMessageCreator(); /* локальная переменная для action Creator'а  Отправка сообщения*/
          dispatch(action)                    /*Вытаскиваем action из всего dispatch'a */
    },
    updateNewMessageCreator :(message) =>{
      let action = updateNewMessageCreator(message); /* Написание сообщения */
          dispatch(action)
    }
  }
}

const allMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AllMessagesContainer)
export default allMessagesContainer;