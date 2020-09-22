import avatar from './../messages/userAvatar.jpg';
import avatarEnot from './../messages/avatarEnot.jpg';
import avatarCat from './../messages/avatarCat.jpg';
import avatarMusic from './../messages/avatarMusic.webp';
let initialState = { /* Базы данных по умолчанию для redux, чтобы он брал начальные значения*/
  friendList : [
    {name: 'Андрей' , avatar: avatarCat , id:'1'},
    {name: 'Алексей' , avatar: avatarMusic , id:'2'},
    {name: 'Маруся' , avatar: avatarEnot , id:'3'},
    {name: 'Пипетка' , avatar: avatar , id:'4'},
  ]
}
const sidebarReducer = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;