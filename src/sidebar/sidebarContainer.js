import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar';
class SidebarContainer extends React.Component {
render(){
return <Sidebar {...this.props}/>
}
}
let mapStateToProps =(state)=>{
return {
  isAuth:state.auth.isAuth
}
}
export default connect(mapStateToProps)(SidebarContainer)