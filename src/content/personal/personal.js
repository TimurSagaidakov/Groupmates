import React from 'react';
import ProfileStatusContainer from '../profile/profileStatus/profileStatusContainer';
import s from './personal.module.css';
const Personal = (props) => {
return(
    <div className={s.personal}>
      <div className={s.name}>Тимур Сагайдаков</div>
      <ProfileStatusContainer/>
      <div className={s.personal_info}>Дата рождения: {props.birth}</div>
      <div className={s.personal_info}>Город: {props.city}</div>
      <div className={s.personal_info}>Образование: {props.education} </div>
      <div className={s.personal_info}>Сайт: {props.site}</div>      
    </div>
);
}
export default Personal;