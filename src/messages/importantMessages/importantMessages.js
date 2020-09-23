import React from 'react';
import OneMessageContainer from './../oneMessage/OneMessageContainer';
import s from'./importantMessages.module.css';
const ImportantMessages = (props) => {
return(
 <div className={s.container}>
   <OneMessageContainer store={props.store}/>
 </div>
);
}
export default ImportantMessages;