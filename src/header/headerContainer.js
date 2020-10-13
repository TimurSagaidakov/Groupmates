import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {getLogin,logout} from '../redux/authReducer';
class HeaderContainer extends React.Component {
  componentDidMount(){
    this.props.getLogin();
  }
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
    login: state.auth.login
  }
}

export default connect(mapStateToProps,{getLogin,logout})(HeaderContainer)