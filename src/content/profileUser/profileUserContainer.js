import React from 'react';
import ProfileUser from './profileUser';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setProfileUsersState} from '../../redux/homeReducer';
import { withRouter } from 'react-router-dom';

class ProfileUserContainer extends React.Component {
  componentDidMount(){
    console.log(this.props.match.params.userId);
    let userId = this.props.match.params.userId;
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response=>{
      this.props.setProfileUsersState(response.data) 
    })
  }
  
render(){
return <ProfileUser {...this.props} />
}
}
let mapStateToProps =(state) =>{
  return{
    profileUsers: state.home.profileUsers
  }
}
const ProfileUserRouter = withRouter(ProfileUserContainer);
export default  connect(mapStateToProps, {setProfileUsersState})(ProfileUserRouter)

