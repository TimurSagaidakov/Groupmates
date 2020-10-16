import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import s from'./profileStatus.module.css'
import ProfileStatus from './profileStatus';
import {getStatus,putStatus,updateStatus} from '../../../redux/homeReducer';


const ProfileStatusHook = (props) =>{
  let [status, setStatus] = useState(props.status)
  useEffect(()=>{
    props.getStatus(props.userId) //получение статуса из апи
    setStatus(props.status) //присвоение статуса из данных статусу хука
  },[props.status]) // от этого зависит наша отрисовка
  let [editMode, setEditMode] = useState(false);
  //Расписал что получается в верхней записи
  //let stateWithSetState = useState(false) /*, функция которая меняет первую переменную */
  //let editMode = stateWithSetState[0] // = false
  //let setEditMode = stateWithSetState[1] // = функция которая меняет первую переменную

  const editModeOn = ()=>{
    setEditMode(true) //Меняем на противоположное значение editMode в useState
  }
  const editModeOff = ()=>{
    setEditMode(false) //Меняем на противоположное значение editMode в useState
    props.putStatus(status);
  }
  
  const UpdateStatus = (e) =>{ // Обновляем локальный стейт когда набираем сообщение в статусе
    setStatus(e.currentTarget.value )
  }
  return <div className={s.container}>
        {editMode 
          ?  <div className={s.inputText}>
              <input   
                      onBlur={editModeOff}
                      onChange={UpdateStatus}
                      type="text"  
                      value={status}
                      autoFocus={true}/>
            </div>
          : <div  className={s.text} 
                  onDoubleClick={editModeOn}
                  > 
              {props.status? props.status: 'Нет статуса'}
            </div>  
}
</div>
}
let mapStateToProps =(state)=>{
  return {
    status: state.home.status,
    userId: state.home.profileUsers.userId,
  }
}

export default connect(mapStateToProps,{putStatus,getStatus})(ProfileStatusHook);