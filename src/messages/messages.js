import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AllMessages from './allMessages/allMessages';
import ImportantMessages from './importantMessages/importantMessages';
import s from'./messages.module.css'
import RightMenuMessage from './rightMenuMessage/rightMenuMessage';
import SearchMessage from './searchMessage/searchMessage';
import UnreadMessages from './unreadMessages/unreadMessages';
import avatar from './userAvatar.jpg';
import avatarEnot from './avatarEnot.jpg';
import avatarCat from './avatarCat.jpg';
import avatarMusic from './avatarMusic.webp';


const Messages = (props) => {
  
return(
  <BrowserRouter>
  <div className={s.container}>
    <div className={s.wrap}>
      <SearchMessage/> 
      <Route path="/allMessages" render={ () => <AllMessages allMessages={props.allMessages} /> }/>
      <Route path="/unreadMessages" render={ () => <UnreadMessages unreadMessages={props.unreadMessages}/> }/>
      <Route path="/importantMessages" component={ImportantMessages}/>
    </div>
    <RightMenuMessage/>
  </div>
  </BrowserRouter>
);
}
export default Messages;