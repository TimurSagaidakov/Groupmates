import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../helper';
const Follow = 'FOLLOW-USER',
      Unfollow = 'UNFOLLOW-USER',
      SetState = 'SET-STATE',
      Set_Users_Current_Page = 'SET-USERS-CURRENT-PAGE',
      set_Total_User_Count = 'SET-TOTAL-USER-COUNT',
      loader_Users = 'LOADER-USERS',
      following_Users = 'FOLLOWING-USERS';
      
let initialState = {
  users:[],
  usersTotalCount: 0, /* Всего пользователей*/ 
  usersOnPages:  10,   /* Пользователей на одной странице*/
  currentPage: 1,     /* Текущая страница*/
  isFetching: false,  /* Loader */
  following: [],    /* Подписка на пользователя */
}

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case Follow :{ /*Подписка на пользователя */ 
      return {
        ...state, 
        users: updateObjectInArray(state.users,action.userID,'id',{followed: true}) //импорт из helper.js
        /*state.users.map( u=> {
          if (u.id === action.userID){
            return {...u, followed: true}
          }
          return u;
        })*/
      }
    }
    case Unfollow:{ /*Отписка от пользователя */
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userID,'id',{followed: false}) //импорт из helper.js
      }
    }
    case SetState :{ /*Запрашиваем массив данных с сервера */
      return { ...state, users: [...action.users] }
    }
    case Set_Users_Current_Page :{ /*Устаналиваем текущую страницу */
      return { ...state, currentPage: action.currentPage }
    }
    case set_Total_User_Count :{ /* Добавляем всех пользователей с сервера */
      return { ...state, usersTotalCount: action.count /*Делим на 100 потому что слишком много пользователей */ }
    }
    case loader_Users :{ 
      return { ...state, isFetching: action.isFetching}
    }
    case following_Users :{ 
      return { ...state, 
        following: action.isFollowing 
        ? [...state.following, action.userID] /* Добавляем id в массив following */
        : state.following.filter(id=>id !== action.userID) /* Удаляем id из массива */
      }
    }
    default: {
      return state;
    }
  }
}
export const setState = (users) =>({type: SetState, users})
const follow = (userID) => ({ type : Follow , userID})
const unfollow = (userID) =>({ type : Unfollow, userID})
const setUsersCurrentPage = (currentPage) =>({type: Set_Users_Current_Page, currentPage })
const setTotalUserCount = (usersTotalCount) =>({type: set_Total_User_Count, count : usersTotalCount})
const loaderUsers = (isFetching) =>({type: loader_Users , isFetching})
const followingUsers = (isFollowing,userID) => ({type: following_Users, isFollowing,userID })


        /*ThunkCreators*/

export const getUsers = (currentPage, usersOnPages)=>{
  return async (dispatch) => {
    dispatch(loaderUsers(true))
    let response = await usersAPI.getUsers(currentPage ,usersOnPages)
    dispatch(loaderUsers(false))
    dispatch(setState(response.data.items));
    dispatch(setTotalUserCount(response.data.totalCount));
  }
}
export const SetCurrentPage = (pageNumber)=>{ /*Переключение страниц на странице Всех пользователей */
return(dispatch)=>{
  dispatch(setUsersCurrentPage(pageNumber));
}
}

const followUnfollow = async (dispatch, userID , AC, ApiMethod ) => { 
  dispatch(followingUsers(true, userID))
  let response = await ApiMethod(userID)
    if(response.data.resultCode === 0){
      dispatch(AC(userID));
    }
  dispatch(followingUsers(false, userID))
}

export const followUser = (userID) =>{
  return async (dispatch) =>{
    followUnfollow(dispatch,userID, follow, usersAPI.Follow)
  }
}

export const UnfollowUser =(userID)=>{
  return async (dispatch)=>{
    followUnfollow(dispatch,userID, unfollow, usersAPI.Unfollow)
  }
}
export default usersReducer;