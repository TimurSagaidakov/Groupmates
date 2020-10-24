import React, { useState } from 'react';
import s from'./paginator.module.css';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Paginator = ({usersTotalCount,usersOnPages,currentPage,switchPages,portionSize}) => {
  let usersTotalPages = Math.ceil(usersTotalCount / usersOnPages);/* Количество страниц пользователей */
let pages = [];
for (let i = 1; i<= usersTotalPages; i++){
  pages.push(i);
}

let portionCount = Math.ceil(usersTotalPages/portionSize) // Количество страниц в порции
const [portionNumber , setPortionNumber] = useState(1) //номер порции
let leftPortionPageNumber = (portionNumber - 1 ) * portionSize + 1 // крайняя левая страница в порции
let rightPortionPageNumber = portionNumber*portionSize // крайняя правая страница в порции

return <div className={s.pagination}>
          {portionNumber > 1 &&
          <div className={s.pagination__arrow} onClick = { () => {setPortionNumber(portionNumber-1)}}>  
            <FontAwesomeIcon icon={faArrowLeft}/> </div>}
          {pages
          .filter(p=> p >= leftPortionPageNumber && p<= rightPortionPageNumber) // фильтруем страницы между левой крайне и правой крайней
          .map( (p)=> { 
            return <div key={p} className={`${s.pagination__item} ${currentPage === p && s.pagination__item_active}`} onClick={(e)=>{switchPages(p)}}>
            {p}
          </div>
            })}
            {portionNumber < portionCount && <div className={s.pagination__arrow} onClick = { () => {setPortionNumber(portionNumber+1)}}> 
            <FontAwesomeIcon icon={faArrowRight}/> </div>}
        </div>
}
export default Paginator;