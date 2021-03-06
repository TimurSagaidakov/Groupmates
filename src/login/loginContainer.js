import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import {login} from '../redux/authReducer';
class LoginContainer extends React.Component {
  login(email, password, rememberMe) {
    this.props.login(email, password, rememberMe)
  }
  render(){
return <Login myId={this.props.myId}captcha={this.props.captcha} login={this.login} {...this.props} />
}
}
let mapStateToProps =(state)=>{
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
    myId: state.auth.id
  }
}

export default connect(mapStateToProps,{login})(LoginContainer);