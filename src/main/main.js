import React from 'react';
import { Route } from 'react-router-dom';
import ContentContainer from '../content/contentContainer';
import ProfileUserContainer from '../content/profileUser/profileUserContainer';
import Login from '../login/login';
import MessagesContainer from '../messages/messagesContainer';
import Sidebar from '../sidebar/sidebar';
import UsersContainer from '../users/usersContainer';
import s from './main.module.css';
const Main = (props) => {
  
  return(
      <main className={s.container}>
            <Sidebar/>        
        <div className={s.wrap}>
          <Route path="/profile" render={ () => <ContentContainer/> } />
          <Route path ="/messages" render={ () => <MessagesContainer /> }/>
          <Route path="/users" render={ () => <UsersContainer/> } />
          <Route path="/profileUser/:userId" render={ () => <ProfileUserContainer/> } />
          <Route path='/login' render={ () =><Login/>}/>
        </div>
      </main>
  );
}
export default Main;