import React from 'react';
import OneUserContainer from './oneUser/oneUserContainer';
import defaultAvatar from './../assets/img/defaultAvatar.jpeg';
import s from'./users.module.css';
import Paginator from '../paginator/paginator';
const Users = ({usersTotalCount,usersOnPages,currentPage,users,switchPages}) => {

return(
      <div className={s.container}>
        <Paginator  usersTotalCount={usersTotalCount} 
                    usersOnPages={usersOnPages} 
                    currentPage={currentPage}
                    switchPages={switchPages} 
                    portionSize={10}/>
        {users.map(u => <OneUserContainer avatar={u.photos.small != null ? u.photos.small: defaultAvatar} name={u.name} id={u.id} key={u.id} country={u.country} phone={u.phone} uniqueUrlName={u.uniqueUrlName} followed={u.followed} />)}
      </div>
    );
}
export default Users;