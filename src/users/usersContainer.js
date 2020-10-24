import {connect} from 'react-redux';
import {SetCurrentPage,getUsers} from './../redux/usersReducer';
import Users from './users';
import React from 'react';
import Loader from '../loader/loader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getTotalCount,getUsersSelector,usersOnPages,currentPage,isFetching } from '../redux/selectors/users-selector';
import { isAuth } from '../redux/selectors/auth-selector';

class UsersContainer extends React.Component{
  componentDidMount(){
    let {currentPage,usersOnPages,getUsers} = this.props
    getUsers(currentPage,usersOnPages)
  };
  switchPages = (pageNumber) =>{
    let {usersOnPages,getUsers,SetCurrentPage} = this.props
    getUsers(pageNumber,usersOnPages)
    SetCurrentPage(pageNumber)
  }
  render() { 
    let {isFetching,usersTotalCount,usersOnPages,currentPage,users} = this.props
    /*if(isFetching){
      return <Loader/>
    } */
    return <>
      <Users  usersTotalCount={usersTotalCount} 
              usersOnPages={usersOnPages} 
              currentPage={currentPage} 
              switchPages={this.switchPages} 
              users={users}
              {...this.props}/> 
      </>
          
  }
}


let mapStateToProps =(state)=>{
  return{
    users: getUsersSelector(state), //селектор полученный из библиотеки reselect
    usersTotalCount: getTotalCount(state), /* Всего пользователей*/ 
    usersOnPages: usersOnPages(state), /* Пользователей на одной странице*/
    currentPage: currentPage(state), /*Текущая страница */
    isFetching: isFetching(state), /* Loader */
    isAuth: isAuth(state)
  } 
}

export default compose(connect(mapStateToProps,{SetCurrentPage,getUsers}), //      ^
                      withAuthRedirect                                     //      |
                      )(UsersContainer)                                   // UsersContainer