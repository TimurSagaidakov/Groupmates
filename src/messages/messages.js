import React from 'react';
import { Route } from 'react-router-dom';
import AllMessagesContainer from './allMessages/allMessagesContainer';
import ImportantMessagesContainer from './importantMessages/importantMessagesContainer';
import s from'./messages.module.css'
import RightMenuMessage from './rightMenuMessage/rightMenuMessage';
import SearchMessage from './searchMessage/searchMessage';
import UnreadMessagesContainer from './unreadMessages/unreadMessagesContainer';


const Messages = () => {
 
return(
  <div className={s.container}>
    <div className={s.wrap}>
      <SearchMessage/> 
      <Route path="/messages/allMessages" render={ () => <AllMessagesContainer/> }/>
      <Route path="/messages/unreadMessages" render={ () => <UnreadMessagesContainer /> }/>
      <Route path="/messages/importantMessages" render={ () => <ImportantMessagesContainer /> }/>
    </div>
    <RightMenuMessage/>
  </div>
);
}
export default Messages;