import React from 'react';
import ProfileUser from './profileUser';
import {connect} from 'react-redux';
import {getProfile} from '../../redux/homeReducer';
import { withRouter } from 'react-router-dom';
import Loader from '../../loader/loader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileUserContainer extends React.Component {
  componentDidMount(){
    let myId = this.props.userId;
    let currentId = this.props.match.params.userId;
    if(!currentId){
      this.props.getProfile(myId)
    }
    this.props.getProfile(this.props.match.params.userId) ;
  }
  componentDidUpdate(prevProps){

    if(this.props.match.params.userId !== prevProps.match.params.userId){
      let myId = this.props.userId;
      let currentId = this.props.match.params.userId;
      if(!currentId){
        this.props.getProfile(myId)
      } 
      this.props.getProfile(this.props.match.params.userId) ;
      }
    }
  
  render(){
    
return <> 
{this.props.isFetching
? <Loader/>
: <ProfileUser {...this.props} />
}
</>
}
}


let mapStateToProps =(state) =>{
  return{
    profileUsers: state.home.profileUsers,
    isFetching: state.usersList.isFetching, /* Loader */
    userId: state.auth.id
  }
}



export default  compose(connect(mapStateToProps, {getProfile}), //      ^ 
                        withRouter,                             //      | 
                        withAuthRedirect                        //      | 
                        )(ProfileUserContainer)             // ProfileUserContainer 

