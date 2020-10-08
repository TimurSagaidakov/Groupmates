import {authAPI} from '../api/api';


const SetAuthUser = 'SET-AUTH-USER-DATA';


let initialState ={
  id: null,
  email: null,
  login: null,
  isAuth: false,
  messages: null,
  isFetching: false,
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SetAuthUser :{ 
      return{
        ...state,
        ...action.data, /*Создаем общую бд для всех записей в initialState */
        isAuth: true
      }
    }
    default: {
      return state;
    }
  }
}

const SetAuthUserData = (id,email,login)=>({type: SetAuthUser, data:{id,email,login}})


export const Login = ()=>{
  return(dispatch)=>{
    authAPI.getLogin().then(response=>{
      if(response.data.resultCode === 0){
        let {id,email,login} = response.data.data;
        dispatch(SetAuthUserData(id,email,login))
      }
    })
  }
}
export default authReducer;