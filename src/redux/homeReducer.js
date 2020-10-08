import {profileAPI} from '../api/api';

const AddPost = 'ADD-POST',
      updateNewPost = 'UPDATE-NEW-POST-TEXT',  // action type переменные
      Set_Profile_User_State = 'SET-PROFILE-USER-STATE',
      loader_Users = 'LOADER-USERS',
      Set_Profile_User_Status = 'SET-PROFILE-USER-STATUS',
      Put_Profile_User_Status = 'PUT-PROFILE-USER-STATUS',
      Update_Status = 'UPDATE-STATUS';

let initialState = {/* Базы данных по умолчанию для redux, чтобы он брал начальные значения*/
  posts : [
    {id: 1, title: 'Какой то старый пост' , name: 'Тимур' , text: 'Сообщение поста', current_time: '20:10', day: '19', month: 'ноября', },
    {id: 2, title: 'Еще один старый пост' , name: 'Володя' , text: 'Сообщение поста',current_time: '20:10', day: '24', month: 'ноября', },
    {id: 3, title: 'Первый пост' , name: 'Паша' , text: 'Сообщение поста',current_time: '20:10', day: '22', month: 'ноября', },
  ],
  profileUsers: null,
  newPostText : '',
  isFetching: false,
  status: 'Я изучаю React!!'
}
const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case AddPost :{
      let newPost = {
        id: 4,
        title: 'Abrakadabra',
        name: 'pokemon',
        text: state.newPostText,
        current_time: new Date().toLocaleTimeString(),
        month: "Ноябрь",
        day: '24'
      };
      return {
        ...state,
        posts: [...state.posts,newPost],
        newPostText: ''
      }
      
    }
    case updateNewPost:{
      return{
        ...state,
        newPostText: action.newText
      }
    }
    case Set_Profile_User_State:{
      return{
        ...state,
        profileUsers: action.profileUsersState
      }
    }
    case loader_Users :{ 
      return { ...state, isFetching: action.isFetching}
    }
    case Set_Profile_User_Status :{
      return{
        ...state,
        status:action.profileStatusState
      }
    }
    case Update_Status :{
      return {
        ...state,
        status: action.updateStatusText
      }
    }
    /*case Put_Profile_User_Status:{
      return{
        ...state,
        status: action.putStatus
      }
    }*/
    default : {
      return state;
    }
  }
}
const setProfileUsersState =(profileUsersState) => ( {type: Set_Profile_User_State, profileUsersState })
const setProfileUsersStatus = (profileStatusState) =>({type: Set_Profile_User_Status, profileStatusState}) //Взятие статуса из БД
export const updateStatus = (updateStatusText) =>({ type: Update_Status, updateStatusText}) //Редактирование статуса
//const putProfileUsersStatus = (putStatus) =>({type: Put_Profile_User_Status, putStatus}) //Добавление статуса в БД
export const addPostActionCreator = () =>( { type: AddPost } )  /* Добавление нового поста в UI */
const loaderUsers = (isFetching) =>({type: loader_Users , isFetching})
export const updateNewPostText = (text) =>( { /*Добавление поста в БД */
    type: updateNewPost,
    newText: text
} )

export const getProfile = (userId) =>{
  return(dispatch)=>{
    dispatch(loaderUsers(true))
    profileAPI.getProfile(userId).then(response=>{
      dispatch(setProfileUsersState(response.data)) 
      dispatch(loaderUsers(false))
    })
  }
}
export const getStatusUsers =(userId) =>{
  return (dispatch) =>{
    profileAPI.getProfile(userId).then(response=>{
      dispatch(setProfileUsersState(response.data)) 
  })
}
}
export const getStatus = () => {
  return(dispatch)=>{
    profileAPI.getStatus().then(response =>{
      dispatch(setProfileUsersStatus(response.data))
    })
  }
}
export const putStatus = (status) => {
  return(dispatch)=>{
    profileAPI.putStatus(status).then(response =>{
      if(response.data.resultCode === 0){
        dispatch(setProfileUsersStatus(status))
      }
    })
  }
}




export default homeReducer;