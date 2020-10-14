import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {logout} from '../redux/authReducer';
class HeaderContainer extends React.Component {
  logout = () => {
    this.props.logout();
  }
  render(){
  return <Header {...this.props} logout={this.logout}/>
  }
}

let mapStateToProps =(state)=>{
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    myId: state.auth.id
  }
}

export default connect(mapStateToProps,{logout})(HeaderContainer)