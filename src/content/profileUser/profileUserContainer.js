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
    this.props.getProfile(this.props.match.params.userId) ;
  }
  
render(){
return <> 
{this.props.isFetching
? <Loader/>
: <ProfileUser {...this.props}/>
}
</>
}
}


let mapStateToProps =(state) =>{
  return{
    profileUsers: state.home.profileUsers,
    isFetching: state.usersList.isFetching, /* Loader */
  }
}



export default  compose(connect(mapStateToProps, {getProfile}), //      ^ 
                        withRouter,                             //      | 
                        withAuthRedirect                        //      | 
                        )(ProfileUserContainer)             // ProfileUserContainer 

