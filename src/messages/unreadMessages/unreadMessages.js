import React from 'react';
import UnreadOneMessageContainer from '../oneMessage/unreadOneMessagesContainer';

const UnreadMessages = (props) => {
return(
  <div >
    <UnreadOneMessageContainer store={props.store}/>
  </div>
);
}
export default UnreadMessages;