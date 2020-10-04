import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow} from './../../redux/usersReducer';
import OneUser from './oneUser';

class OneUserContainer extends React.Component{
  FollowFunc =()=>{
    this.props.follow(this.props.id);
  }
  UnfollowFunc =()=>{
    this.props.unfollow(this.props.id);
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
                    UnfollowFunc={this.UnfollowFunc}/> }
  }

let mapStateToProps =(state)=>{
  return{
    users: state.usersList.users
  } 
};

const oneUserContainer = connect(mapStateToProps,{follow,unfollow})(OneUserContainer)
export default oneUserContainer;