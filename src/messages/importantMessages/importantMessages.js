import React from 'react';
import OneMessageContainer from '../oneMessage/oneMessageContainer';

import s from'./importantMessages.module.css';
const ImportantMessages = (props) => {
return(
 <div className={s.container}>
   <OneMessageContainer store={props.store}/>
 </div>
);
}
export default ImportantMessages;