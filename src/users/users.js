import React from 'react';
import OneUserContainer from './oneUser/oneUserContainer';
import defaultAvatar from './../assets/img/defaultAvatar.jpeg';
import s from'./users.module.css';
const Users = (props) => {
  
  let usersTotalPages = Math.ceil(props.usersTotalCount / props.usersOnPages);/* Количество страниц пользователей */
let pages = [];
for (let i = 1; i<= usersTotalPages; i++){
  pages.push(i);
}
return(
      <div className={s.container}>
        <div className={s.pagination}>
          {pages.map( p=> { 
            return <div className={`${s.pagination__item} ${props.currentPage === p && s.pagination__item_active}`} onClick={(e)=>{props.switchPages(p)}}>
            {p}
          </div>
            })}
        </div>
        {props.users.map(u => <OneUserContainer avatar={u.photos.small != null ? u.photos.small: defaultAvatar} name={u.name} id={u.id} key={u.id} country={u.country} phone={u.phone} uniqueUrlName={u.uniqueUrlName} followed={u.followed} />)}
      </div>
    );
}
export default Users;