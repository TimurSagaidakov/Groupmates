import React from 'react';
import s from'./searchMessage.module.css';
const SearchMessage = (props) => {
return(
<div className={s.container}>
  <input type='text' placeholder='Поиск'/>
  <div className={s.close}>
    <span></span>
    <span></span>
  </div>
</div>
);
}
export default SearchMessage;