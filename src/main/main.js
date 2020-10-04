import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../content/content';
import ProfileUserContainer from '../content/profileUser/profileUserContainer';
import Messages from '../messages/messages';
import Sidebar from '../sidebar/sidebar';
import UsersContainer from '../users/usersContainer';
import s from './main.module.css';
const Main = (props) => {
  return(
      <main className={s.container}>
            <Sidebar/>        
        <div className={s.wrap}>
          <Route path="/profile" render={ () => <Content/> } />
          <Route path ="/messages" render={ () => <Messages /> }/>
          <Route path="/users" render={ () => <UsersContainer/> } />
          <Route path="/profileUser/:userId" render={ () => <ProfileUserContainer/> } />
        </div>
      </main>
  );
}
export default Main;