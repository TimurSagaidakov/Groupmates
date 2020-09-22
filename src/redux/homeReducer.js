const AddPost = 'ADD-POST',
  updateNewPost = 'UPDATE-NEW-POST-TEXT';  /* action type переменные */
const homeReducer = (state, action) => {
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