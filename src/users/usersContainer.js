import {connect} from 'react-redux';
import {SetCurrentPage,getUsers} from './../redux/usersReducer';
import Users from './users';
import React from 'react';
import Loader from '../loader/loader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component{
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.usersOnPages)
  };
  switchPages = (pageNumber) =>{
    this.props.getUsers(pageNumber,this.props.usersOnPages)
    this.props.SetCurrentPage(pageNumber)
  }
  render() { 
    
    return <>
      {this.props.isFetching ? <Loader/> : 
      <Users  usersTotalCount={this.props.usersTotalCount} 
              usersOnPages={this.props.usersOnPages} 
              currentPage={this.props.currentPage} 
              switchPages={this.switchPages} 
              users={this.props.users}
              {...this.props}/> }
      </>
          
  }
}


let mapStateToProps =(state)=>{
  return{
    users: state.usersList.users,
    usersTotalCount: state.usersList.usersTotalCount, /* Всего пользователей*/ 
    usersOnPages: state.usersList.usersOnPages, /* Пользователей на одной странице*/
    currentPage: state.usersList.currentPage, /*Текущая страница */
    isFetching: state.usersList.isFetching, /* Loader */
    isAuth: state.auth.isAuth
  } 
}

export default compose(connect(mapStateToProps,{SetCurrentPage,getUsers}), //      ^
                      withAuthRedirect                                     //      |
                      )(UsersContainer)                                   // UsersContainer