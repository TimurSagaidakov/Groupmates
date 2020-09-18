import React from 'react';
import Name from './name/name';
import s from './personal.module.css';
const Personal = (props) => {
return(
    <div className={s.personal}>
      <Name name='Тимур Сагайдаков'/>
      <div className={s.personal_info}>Дата рождения: {props.birth}</div>
      <div className={s.personal_info}>Город: {props.city}</div>
      <div className={s.personal_info}>Образование: {props.education} </div>
      <div className={s.personal_info}>Сайт: {props.site}</div>      
    </div>
);
}
export default Personal;