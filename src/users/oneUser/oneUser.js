import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../button/button';
import s from'./oneUser.module.css'

const OneUser = ({id,avatar,name,followed,following,UnfollowFunc,FollowFunc}) =>{
    return( 
      <div className={s.container}>
        <NavLink to={'/profile/' + id} className={s.avatar}>
          <img src={avatar} alt=""/>
        </NavLink>
        <div className={s.info}>
          <div className={s.name}>
            {name}
          </div>
          <div className={s.contry}>
            {'country'}
          </div>
          <div className={s.phone}>
            {'phone'}
          </div>
        </div>
        <div className={s.button}>
          {followed ? 
            (following.some(iD => iD === id) // Проверяем при нажатии совпадает ли id пользователя 
            ? 
            <Button name="Подождите" />
            :
            <Button function={UnfollowFunc} name="Отписаться" /> 
            )
          :
          (following.some(iD => iD === id) 
            ? 
            <Button name="Подождите" />
            :
            <Button function={FollowFunc} name="Подписаться" /> 
            )
          }
        </div>
      </div>
    );
  }

export default OneUser;