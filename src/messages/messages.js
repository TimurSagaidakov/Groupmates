import React from 'react';
import { Route } from 'react-router-dom';
import AllMessages from './allMessages/allMessages';
import ImportantMessages from './importantMessages/importantMessages';
import s from'./messages.module.css'
import Dialogs from './oneMessage/dialog/dialogs';
import RightMenuMessage from './rightMenuMessage/rightMenuMessage';
import SearchMessage from './searchMessage/searchMessage';
import UnreadMessages from './unreadMessages/unreadMessages';



const Messages = (props) => {
return(
  <div className={s.container}>
    <div className={s.wrap}>
      <SearchMessage/> 
      <Route path="/messages/allMessages" render={ () => <AllMessages allMessages={props.state.allMessages} dispatch={props.dispatch}/> }/>
      <Route path="/messages/unreadMessages" render={ () => <UnreadMessages unreadMessages={props.state.unreadMessages}/> }/>
      <Route path="/messages/importantMessages" component={ImportantMessages}/>
      <Route path="/messages/1" render={ () => <Dialogs allMessages={props.state.allMessages} dispatch={props.dispatch} /> }/>
    </div>
    <RightMenuMessage/>
  </div>
);
}
export default Messages;