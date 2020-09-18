import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from '../content/content';
import Messages from '../messages/messages';
import Sidebar from '../sidebar/sidebar';
import s from './main.module.css';
const Main = () => {
  return(
    <BrowserRouter>
      <main className={s.container}>
        <Sidebar/>
        <div className={s.wrap}>
          <Route path="/home" component={Content}/>
          <Route path ="/messages" component={Messages}/>
        </div>
      </main>
    </BrowserRouter>
  );
}
export default Main;