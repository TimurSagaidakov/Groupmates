import {updateNewMessageCreator, newUnreadMessageCreator} from './../../redux/messagesReducer';
import ImportantMessages from './importantMessages';
import React from 'react';
import {connect} from 'react-redux';

class ImportantMessagesContainer extends React.Component {
  addMessageFunc1= () =>{
    this.props.newUnreadMessageCreator(); 
  }
  updateMessageFunc = (e) =>{
    let message = e.target.value;
    this.props.updateNewMessageCreator(message);
}
render(){
return <ImportantMessages addMessageFunc1={this.addMessageFunc1} 
                          updateMessageFunc={this.updateMessageFunc}
                          importantMessages={this.props.importantMessages}
                          newMessageBody={this.props.newMessageBody} />
}
}
let mapStateToProps = (state) =>{
  return{
    importantMessages : state.messages.unreadMessages, /*Передаю в пропсы массив данных */
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
const importantMessagesContainer = connect(mapStateToProps,mapDispatchToProps)(ImportantMessagesContainer)
export default importantMessagesContainer;