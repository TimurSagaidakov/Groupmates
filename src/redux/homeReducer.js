const AddPost = 'ADD-POST',
      updateNewPost = 'UPDATE-NEW-POST-TEXT',  /* action type переменные */
      Set_Profile_User_State = 'SET-PROFILE-USER-STATE';

let initialState = {/* Базы данных по умолчанию для redux, чтобы он брал начальные значения*/
  posts : [
    {id: 1, title: 'Какой то старый пост' , name: 'Тимур' , text: 'Сообщение поста', current_time: '20:10', day: '19', month: 'ноября', },
    {id: 2, title: 'Еще один старый пост' , name: 'Володя' , text: 'Сообщение поста',current_time: '20:10', day: '24', month: 'ноября', },
    {id: 3, title: 'Первый пост' , name: 'Паша' , text: 'Сообщение поста',current_time: '20:10', day: '22', month: 'ноября', },
  ],
  profileUsers: null,
  newPostText : ''
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
    default : {
      return state;
    }
  }
}
export const setProfileUsersState =(profileUsersState) => ( {type: Set_Profile_User_State, profileUsersState })
export const addPostActionCreator = () =>( { type: AddPost } )  /* Добавление нового поста в UI */
export const updateNewPostText = (text) =>( { /*Добавление поста в БД */
    type: updateNewPost,
    newText: text
} )

export default homeReducer;