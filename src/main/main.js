import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../content/content';
import Messages from '../messages/messages';
import Sidebar from '../sidebar/sidebar';
import StoreContext from '../storeContext';

import s from './main.module.css';
const Main = (props) => {

  return(
      <main className={s.container}>
        <StoreContext.Consumer>
          {
          store =>(
            <Sidebar state={store.getState()}/>
          )
          }
        </StoreContext.Consumer>
        
        <div className={s.wrap}>
          <Route path="/home" render={ () => <Content/> } />
          <Route path ="/messages" render={ () => <Messages /> }/>
        </div>
      </main>
  );
}
export default Main;