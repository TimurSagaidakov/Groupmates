import React from 'react';
import { connect } from 'react-redux';
import ProfileStatus from './profileStatus';
import {getStatus,putStatus,updateStatus} from '../../../redux/homeReducer';
class ProfileStatusContainer extends React.Component {
  componentDidMount(){
    this.props.getStatus()
  }
  state = {
    editMode: false,
  }
  editModeOn = () =>{
    this.setState({
        editMode : true
      })
  }
  editModeOff = () =>{
    this.setState({
      editMode : false
    })
    this.props.putStatus(this.props.userStatus);
    
  }
  UpdateStatus = (e) =>{
    this.props.updateStatus(e.target.value)
  }
render(){
return <ProfileStatus {...this.props} UpdateStatus={ this.UpdateStatus} editModeOff={this.editModeOff} editModeOn={this.editModeOn} editMode={this.state.editMode} userStatus={this.props.userStatus}/>
}
}
let mapStateToProps =(state)=>{
  return{
    userStatus: state.home.status
  }
}


export default connect(mapStateToProps,{getStatus,putStatus,updateStatus})(ProfileStatusContainer)