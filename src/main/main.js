import React from 'react';
import { Route } from 'react-router-dom';
import ContentContainer from '../content/contentContainer';
import ProfileUserContainer from '../content/profileUser/profileUserContainer';
import LoginContainer from '../login/loginContainer';
import MessagesContainer from '../messages/messagesContainer';
import Sidebar from '../sidebar/sidebar';
import UsersContainer from '../users/usersContainer';
import s from './main.module.css';
const Main = () => {
  return(
      <main className={s.container}> 
            <Sidebar/>        
        <div className={s.wrap}>
          <Route path="/profile/:userId" render={ () => <ProfileUserContainer/> } />
          <Route path ="/messages" render={ () => <MessagesContainer /> }/>
          <Route path="/users" render={ () => <UsersContainer/> } />
          <Route path="/login" render={ () =><LoginContainer/>}/>
        </div>
      </main> 
  )
}

export default Main;