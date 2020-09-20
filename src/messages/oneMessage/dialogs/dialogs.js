import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialog from '../dialog/dialog';
import s from'./dialogs.module.css'
const Dialogs = (props) => {
  let DialogData = props.allMessages.map( m => <Dialog name={m.name} id={m.id} message ={m.message} avatar={m.avatar}/>)
return(
  <BrowserRouter>
    <div className={s.container}>
      <Route path="/message/:id"  component={DialogData}  />
    </div>
  </BrowserRouter>
);
}
export default Dialogs;