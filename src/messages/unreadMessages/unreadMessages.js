import React from 'react';
import s from'./unreadMessages.module.css';
const UnreadMessages = (props) => {
return(
  <div className={s.container}>
    <UnreadOneMessageContainer props={props.store} />
  </div>
);
}
export default UnreadMessages;