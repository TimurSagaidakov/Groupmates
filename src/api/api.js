import * as axios from 'axios';
const instance = axios.create({ /* Создание instance для отображения в объектах ниже */
  withCredentials:true,/* Для авторизации на сервере */
  baseURL: `https://social-network.samuraijs.com/api/1.0/`, /* Базовый адрес */
  headers:{
    "API-KEY": "dfb6dd5b-f412-4b96-9a15-3f1e5949acdc" /* ключ для запросов */
  }
});

export const usersAPI = {
  getUsers(currentPage,usersOnPages) {/* Получить пользователей на странице "Все  пользователи" */
    return instance.get(`users?page=${currentPage}&count=${usersOnPages}`)
  },
  switchPages(pageNumber,usersOnPages) { /*Переход на другую страницу на странице "Все пользователи" */
    return instance.get(`users?page=${pageNumber}&count=${usersOnPages}`)
  },
  Follow(id) { /* Запрос к БД о подписке к пользователю */
    return instance.post(`follow/${id}`)
  },
  Unfollow(id){ /* Запрос к БД об отписке от пользователю */
    return instance.delete(`follow/${id}`)
  }
};
export const profileAPI ={
  getProfile(userId){ /* Запрос к БД о получении данных профиля пользователя */
    return instance.get(`profile/` + userId)
  },
  getLogin(){ /* Получение имени пользователя из БД */
    return instance.get(`auth/me`)
  },

  getStatus(){//Получение статуса пользователя */
    return instance.get('profile/status/11858')
  },
  putStatus(status){ //Добавление статуса пользователя 
    return instance.put('profile/status', {status})
  }
}

export const authAPI = {
  getLogin(){ /* Получение имени пользователя из БД */
    return instance.get(`auth/me`)
  }
}
