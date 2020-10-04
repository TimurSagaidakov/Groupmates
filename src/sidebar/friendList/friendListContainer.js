import Friend from './friend';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{
  return{
    friendList: state.sidebar.friendList
  }
}


const friendListContainer = connect(mapStateToProps)(Friend)
export default friendListContainer;