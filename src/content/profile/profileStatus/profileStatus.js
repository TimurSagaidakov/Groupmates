import React from 'react';
import s from'./profileStatus.module.css'

const ProfileStatus = (props) => {
return <div className={s.container}>
  {props.editMode
    ?  <div className={s.inputText}>
        <input  onBlur={props.editModeOff} 
                onChange={props.UpdateStatus}
                type="text" value={props.status} 
                autoFocus={true}/>
      </div>
    : <div  className={s.text} 
            onDoubleClick={props.editModeOn}> 
        {props.userStatus}
      </div>  
}
  
  
</div>
}
export default ProfileStatus;