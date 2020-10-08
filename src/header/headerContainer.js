import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {Login} from '../redux/authReducer';
class HeaderContainer extends React.Component {
  componentDidMount(){
    this.props.Login();
  }
render(){
  return <Header {...this.props}/>
  }
}

let mapStateToProps =(state)=>{
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps,{Login})(HeaderContainer)