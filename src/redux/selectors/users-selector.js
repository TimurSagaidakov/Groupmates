import { createSelector } from "reselect";

const getUsers = (state )=>{ //Создаем селектор для HOC библиотеки reselect
  return state.usersList.users 
}

export const getUsersData = createSelector(getUsers, (users) =>{ 
  return users.filter(u=> u.photos.small !== null);
}) 
export const getTotalCount = (state) => {
  return state.usersList.usersTotalCount
}

export const usersOnPages = (state) => {
  return state.usersList.usersOnPages
}

export const currentPage = (state) => {
  return state.usersList.currentPage
}
export const isFetching = (state) => {
  return state.usersList.isFetching
}

