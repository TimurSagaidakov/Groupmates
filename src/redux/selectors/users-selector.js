export const getUsersData = (state) => {
  return state.usersList.users;
}

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

