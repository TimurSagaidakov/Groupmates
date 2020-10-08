import React from 'react';
import {connect} from 'react-redux';
import {followUser, UnfollowUser} from './../../redux/usersReducer';
import OneUser from './oneUser';

class OneUserContainer extends React.Component{
  FollowFunc =()=>{
    this.props.followUser(this.props.id)
  }
  UnfollowFunc =()=>{
    this.props.UnfollowUser(this.props.id)
  }
  render() { 
    return <OneUser avatar={this.props.avatar}
                    name={this.props.name}
                    id={this.props.id}
                    key={this.props.id}
                    country={this.props.country}
                    phone={this.props.phone}
                    uniqueUrlName={this.props.uniqueUrlName}
                    followed={this.props.followed}
                    FollowFunc={this.FollowFunc}
                    UnfollowFunc={this.UnfollowFunc}
                    {...this.props}/> }
  }

let mapStateToProps =(state)=>{
  return{
    users: state.usersList.users,
    following: state.usersList.following
  } 
};

export default connect(mapStateToProps,{UnfollowUser,followUser})(OneUserContainer)
