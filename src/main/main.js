import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import Loader from '../loader/loader';
import { Route } from 'react-router-dom';
import ProfileUserContainer from '../content/profileUser/profileUserContainer';
import Sidebar from '../sidebar/sidebar';
import s from './main.module.css';
import {initializeApp} from '../redux/appReducer';
import LoginContainer from '../login/loginContainer';
import {WithSuspense} from '../hoc/withSuspense';
//Ленивая загрузка компонентов
const UsersContainer = React.lazy( () => import ('../users/usersContainer') )
const MessagesContainer = React.lazy( () => import ('../messages/messagesContainer') )


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
            {WithSuspense(ProfileUserContainer,"/profile/:userId")}
            {WithSuspense(MessagesContainer,"/messages")}
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