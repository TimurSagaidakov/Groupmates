import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../content/content';
import Messages from '../messages/messages';
import Sidebar from '../sidebar/sidebar';

import s from './main.module.css';
const Main = (props) => {

  return(
      <main className={s.container}>
        <Sidebar state={props.store.getState()}/>
        <div className={s.wrap}>
          <Route path="/home" render={ () => <Content store={props.store}/> } />
          <Route path ="/messages" render={ () => <Messages store={props.store}/> }/>
        </div>
      </main>
  );
}
export default Main;