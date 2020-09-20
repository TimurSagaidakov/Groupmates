import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../content/content';
import Messages from '../messages/messages';
import Sidebar from '../sidebar/sidebar';

import s from './main.module.css';
const Main = (props) => {

  return(
      <main className={s.container}>
        <Sidebar state={props.state.sidebar}/>
        <div className={s.wrap}>
          <Route path="/" exact render={ () => <Content state={props.state.home} dispatch={props.dispatch}/> } />
          <Route path ="/messages" render={ () => <Messages state={props.state.messages}/> }/>
        </div>
      </main>
  );
}
export default Main;