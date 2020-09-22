const AddPost = 'ADD-POST',
  updateNewPost = 'UPDATE-NEW-POST-TEXT';  /* action type переменные */

let initialState = {/* Базы данных по умолчанию для redux, чтобы он брал начальные значения*/
  posts : [
    {id: 1, title: 'Какой то старый пост' , name: 'Тимур' , text: 'Сообщение поста' },
    {id: 2, title: 'Еще один старый пост' , name: 'Володя' , text: 'Сообщение поста' },
    {id: 3, title: 'Первый пост' , name: 'Паша' , text: 'Сообщение поста' },
  ],
  newPostText : ''
}
const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case AddPost :{
      let newPost = {
        id: 4,
        title: 'Abrakadabra',
        name: 'pokemon',
        text: state.newPostText
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    }
    case updateNewPost:{
      state.newPostText = action.newText;
      return state;
    }
    default : {
      return state;
    }
  }
}

export const addPostActionCreator = () =>( { type: AddPost } )  /* Добавление нового поста в UI */
export const updateNewPostText = (text) =>( { /*Добавление поста в БД */
    type: updateNewPost,
    newText: text
} )

export default homeReducer;