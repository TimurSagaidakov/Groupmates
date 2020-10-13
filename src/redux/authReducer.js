import {authAPI} from '../api/api';


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
export const getLogin = ()=>{
  return(dispatch)=>{
    authAPI.getLogin().then(response=>{
      if(response.data.resultCode === 0){
        let {id,email,login } = response.data.data;
        dispatch(SetAuthUserData(id,email,login,  true))
      }
    })
  }
}

export const login =(email,password,rememberMe)=>{
  return(dispatch) =>{
    authAPI.login(email,password,rememberMe).then(response=>{
      if(response.data.resultCode === 0) {
        dispatch(getLogin())
      }
      if(response.data.resultCode === 10){
        alert('Сработало антиспам защита, введите капчу на сайте');

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