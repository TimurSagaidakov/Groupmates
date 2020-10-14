import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SetAuthUser = 'SET-AUTH-USER-DATA';
const LoginUser = 'LOGIN-USER';
const Anti_Bot_Captcha= 'ANTI-BOT-CAPTCHA';

let initialState ={
  id: null,
  email: null,
  password: null,
  isAuth: false,
  isFetching: false,
  captcha : false,
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SetAuthUser :{ 
      return{
        ...state,
        ...action.payload /*Создаем общую бд для всех записей в initialState */
        
      }
    }
    case LoginUser: {
      return{
        ...state,
        ...action.payload,
      }
    }
    case Anti_Bot_Captcha: {
      return{
        ...state,
        captcha : true,
      }
    }
    default: {
      return state;
    }
  }
}

const SetAuthUserData = (id,email,login,isAuth)=>({type: SetAuthUser, payload:{id,email,login,isAuth}})
//const loginUser = (email,password,rememberMe) =>({type: LoginUser, payload:{email,password,rememberMe}});
//const AntiBotCaptcha = () =>({type: Anti_Bot_Captcha })
export const getLogin = ()=>(dispatch)=>{
    return authAPI.getLogin().then(response=>{ //return для того чтобы понять когда операция будет завершена
      if(response.data.resultCode === 0){
        let {id,email,login } = response.data.data;
        dispatch(SetAuthUserData(id,email,login,  true))
      }
    })
    
  }


export const login =(email,password,rememberMe)=>{
  return(dispatch) =>{
    authAPI.login(email,password,rememberMe).then(response=>{
      if(response.data.resultCode === 0) {
        dispatch(getLogin())
      }
      else{
        let message = response.data.messages.length > 0 //Если сообщение от сервера длиннее нуля, то есть не пустое
            ? response.data.messages //вытаскиваем сообщение из полученного ответа от сервера
            : "Неправильно введенные данные";
          dispatch(stopSubmit('Login', {_error : message}))      
      }
    })
  }
}

export const logout =()=>{
  return(dispatch) =>{
    authAPI.logout().then(response=>{
      if(response.data.resultCode === 0) {
        dispatch(SetAuthUserData(null,null,null, false))
        
      }
    })
  }
}
export default authReducer;