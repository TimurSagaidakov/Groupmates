import {connect} from 'react-redux';
import {setState, setUsersCurrentPage,setTotalUserCount,loaderUsers} from './../redux/usersReducer';
import * as axios from 'axios';
import Users from './users';
import React from 'react';
import Loader from '../loader/loader';


class UsersContainer extends React.Component{
  componentDidMount(){
    this.props.loaderUsers(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPages}`).then(response=>{
      this.props.loaderUsers(false)
      this.props.setState(response.data.items);
      this.props.setTotalUserCount(response.data.totalCount);
      });
  };
  switchPages = (pageNumber) =>{
    this.props.loaderUsers(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPages}`).then(response=>{
    this.props.loaderUsers(false)
    this.props.setState(response.data.items)
      });
    this.props.setUsersCurrentPage(pageNumber);
  }
  
  render() { 
    
    return <>
      {this.props.isFetching ? <Loader/> : 
      <Users  usersTotalCount={this.props.usersTotalCount} 
              usersOnPages={this.props.usersOnPages} 
              currentPage={this.props.currentPage} 
              switchPages={this.switchPages} 
              users={this.props.users} /> }
      </>
          
  }
}
let mapStateToProps =(state)=>{
  return{
    users: state.usersList.users,
    usersTotalCount: state.usersList.usersTotalCount, /* Всего пользователей*/ 
    usersOnPages: state.usersList.usersOnPages, /* Пользователей на одной странице*/
    currentPage: state.usersList.currentPage, /*Текущая страница */
    isFetching: state.usersList.isFetching /* Loader */
  } 
}

const usersContainer = connect(mapStateToProps,{setState, setTotalUserCount, setUsersCurrentPage, loaderUsers} ) (UsersContainer)
export default usersContainer;