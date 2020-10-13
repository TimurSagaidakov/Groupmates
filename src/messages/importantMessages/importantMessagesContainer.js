import {newUnreadMessageCreator} from './../../redux/messagesReducer';
import ImportantMessages from './importantMessages';
import React from 'react';
import {connect} from 'react-redux';

class ImportantMessagesContainer extends React.Component {
  addMessage= (message) =>{
    this.props.newUnreadMessageCreator(message); 
  }
  
render(){
return <ImportantMessages addMessage={this.addMessage} 
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
const importantMessagesContainer = connect(mapStateToProps,{newUnreadMessageCreator})(ImportantMessagesContainer)
export default importantMessagesContainer;