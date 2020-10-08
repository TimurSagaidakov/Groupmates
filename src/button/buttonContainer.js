import {connect} from 'react-redux';
import Button from './button';

let mapStateToProps =(state)=>{
  return{
    following: state.usersList.following
  } 
};
export default connect(mapStateToProps)(Button)