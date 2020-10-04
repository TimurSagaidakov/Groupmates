const Follow = 'FOLLOW-USER',
      Unfollow = 'UNFOLLOW-USER',
      SetState = 'SET-STATE',
      Set_Users_Current_Page = 'SET-USERS-CURRENT-PAGE',
      set_Total_User_Count = 'SET-TOTAL-USER-COUNT',
      loader_Users = 'LOADER-USERS';

let initialState = {
  users:[],
  usersTotalCount: 0, /* Всего пользователей*/ 
  usersOnPages: 5 ,/* Пользователей на одной странице*/
  currentPage: 1, /* Текущая страница*/
  isFetching: false /* Loader */
}

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case Follow :{ /*Подписка на пользователя */ 
      return {
        ...state, 
        users: state.users.map( u=> {
          if (u.id === action.userID){
            return {...u, followed: true}
          }
          return u;
        })
      }
    }
    case Unfollow:{ /*Отписка от пользователя */
      return {
        ...state,
        users: state.users.map( u=>{
          if (u.id === action.userID){
            return{...u, followed: false}
          }
          return u;
        })
      }
    }
    case SetState :{ /*Запрашиваем массив данных с сервера */
      return { ...state, users: [...action.users] }
    }
    case Set_Users_Current_Page :{ /*Устаналиваем текущую страницу */
      return { ...state, currentPage: action.currentPage }
    }
    case set_Total_User_Count :{ /* Добавляем всех пользователей с сервера */
      return { ...state, usersTotalCount: action.count/100 /*Делим на 100 потому что слишком много пользователей */ }
    }
    case loader_Users :{ 
      return { ...state, isFetching: action.isFetching}
    }
    default: {
      return state;
    }
  }
}
export const setState = (users) =>({type: SetState, users})
export const follow = (userID) => ({ type : Follow , userID})
export const unfollow = (userID) =>({ type : Unfollow, userID})
export const setUsersCurrentPage = (currentPage) =>({type: Set_Users_Current_Page, currentPage })
export const setTotalUserCount = (usersTotalCount) =>({type: set_Total_User_Count, count : usersTotalCount})
export const loaderUsers = (isFetching) =>({type: loader_Users , isFetching})
export default usersReducer;