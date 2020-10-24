import React from 'react';
import s from'./profileStatus.module.css'

class ProfileStatus extends React.Component {

render() {
  return <div className={s.container}>
  {this.props.editMode
    ?  <div className={s.inputText}>
        <input  onBlur={this.props.editModeOff} 
                onChange={this.props.UpdateStatus}
                type="text" value={this.props.status} 
                autoFocus={true}/>
      </div>
    : <div  className={s.text} 
            onDoubleClick={this.props.editModeOn}> 
        {this.props.userStatus? this.props.userStatus: 'Нет статуса'}
      </div>  
  }
</div>
}
  
  
}
export default ProfileStatus;