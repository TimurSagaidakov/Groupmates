import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../content/content';
import Messages from '../messages/messages';
import Sidebar from '../sidebar/sidebar';

import s from './main.module.css';
const Main = (props) => {
  
  return(
      <main className={s.container}>
        <Sidebar/>
        <div className={s.wrap}>
          <Route path="/home" render={ () => <Content posts={props.posts}/> } />
          <Route path ="/messages" render={ () => <Messages unreadMessages={props.unreadMessages} allMessages={props.allMessages}/> }/>
        </div>
      </main>
  );
}
export default Main;