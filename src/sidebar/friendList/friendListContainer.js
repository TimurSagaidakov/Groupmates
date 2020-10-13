import {connect} from 'react-redux';
import React from 'react';
import Friend from './friend';
import {getUsers} from '../../redux/usersReducer';
import defaultAvatar from '../../assets/img/defaultAvatar.jpeg';

class FriendContainer extends React.Component {
  componentDidMount(){
    this.props.getUsers(null, this.props.usersOnPages)
  }
  render(){
return <div className='container'>
  {this.props.users.map(u=> u.followed? <Friend id={u.id} key={u.id} avatar={u.photos.small != null ? u.photos.small: defaultAvatar} name={u.name}/>: '')}
</div>
}
}

let mapStateToProps = (state) =>{
  return{
    users: state.usersList.users,
    usersOnPages: 99
  }
}


export default connect(mapStateToProps,{getUsers})(FriendContainer);
