import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProfileUserContainer from '../content/profileUser/profileUserContainer';
import LoginContainer from '../login/loginContainer';
import MessagesContainer from '../messages/messagesContainer';
import Sidebar from '../sidebar/sidebar';
import UsersContainer from '../users/usersContainer';
import s from './main.module.css';
import {initializeApp} from '../redux/appReducer';
import Loader from '../loader/loader';

class Main extends React.Component{
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    if(!this.props.initial){ //Пока не задиспатчится то, что указано здесь, будет показан прелоадер
      return <Loader/>
    }
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
}
let mapStateToProps =(state)=>{
  return{
    initial: state.app.initial
  }
}
export default connect(mapStateToProps,{initializeApp})(Main);