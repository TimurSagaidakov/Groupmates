import React from 'react';
import Avatar from '../avatar/avatar';
import Personal from '../personal/personal';
import s from './info.module.css';
const Info = () => {
  return(
    <div className={s.info}>
      <Avatar/>
      <Personal birth='20 ноября' city='Мегион' education="СевКавГТУ" site="https://github.com/TimurSagaidakov" />
    </div>
  );
}
export default Info;