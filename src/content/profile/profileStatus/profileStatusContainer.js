import React from 'react';
import { connect } from 'react-redux';
import ProfileStatus from './profileStatus';
import {getStatus,putStatus,updateStatus} from '../../../redux/homeReducer';
class ProfileStatusContainer extends React.Component {
  componentDidMount(){
    this.props.getStatus(this.props.userId) // Засовываем в компоненту данные из глобального стейта
  }
  state = { // локальный стейт
    editMode: false,
    status: this.props.userStatus
  }
  editModeOn = () =>{ // Событие когда фокус в инпуте
    this.setState({ // обязательно, потому что setState асинхронное событие
        editMode : true
      })
  }
  editModeOff = () =>{ // событие когда фокус выходит из инпута
    this.setState({ // обязательно, потому что setState асинхронное событие
      editMode : false
    })
    this.props.putStatus(this.state.status); // Записываем на сервере наш новый статус
  }
  UpdateStatus = (e) =>{ // Обновляем локальный стейт когда набираем сообщение в статусе
    this.setState({ // обязательно, потому что setState асинхронное событие
      status: e.currentTarget.value 
    })
  }
  componentDidUpdate(){
    
  }
render(){
return <ProfileStatus {...this.props} 
                      status={this.state.status} 
                      UpdateStatus={ this.UpdateStatus} 
                      editModeOff={this.editModeOff} 
                      editModeOn={this.editModeOn} 
                      editMode={this.state.editMode} 
                      userStatus={this.props.userStatus}/>
}
}
let mapStateToProps =(state)=>{
  return{
    userStatus: state.home.status,
    userId: state.home.profileUsers.userId,
  }
}


export default connect(mapStateToProps,{getStatus,putStatus,updateStatus})(ProfileStatusContainer)