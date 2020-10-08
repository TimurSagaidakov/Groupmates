import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../button/button';
import s from'./oneUser.module.css'

const OneUser = (props) =>{
 
    return( 
      <div className={s.container}>
        <NavLink to={'/profileUser/' + props.id} className={s.avatar}>
          <img src={props.avatar} alt=""/>
        </NavLink>
        <div className={s.info}>
          <div className={s.name}>
            {props.name}
          </div>
          <div className={s.contry}>
            {'props.country'}
          </div>
          <div className={s.phone}>
            {'props.phone'}
          </div>
        </div>
        <div className={s.button}>
          {props.followed ? 
            (props.following.some(id => id === props.id) // Проверяем при нажатии совпадает ли id пользователя 
            ? 
            <Button function={props.UnfollowFunc} name="Подождите" />
            :
            <Button function={props.UnfollowFunc} name="Отписаться" /> 
            )
          :
          (props.following.some(id => id === props.id) 
            ? 
            <Button function={props.FollowFunc} name="Подождите" />
            :
            <Button function={props.FollowFunc} name="Подписаться" /> 
            )
          }
        </div>
      </div>
    );
  }

export default OneUser;