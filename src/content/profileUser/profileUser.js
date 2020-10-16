import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../loader/loader';
import s from'./profileUser.module.css';
import twitter from './../../assets/img/twitter.svg';
import github from './../../assets/img/github.svg';
import instagram from './../../assets/img/instagram.svg';
import vk from './../../assets/img/vk.svg';
import facebook from './../../assets/img/facebook.svg';
import defaultAvatar from '../../assets/img/defaultAvatar.jpeg';
import PostContainer from '../posts/post/postContainer';
import ProfileStatusContainer from '../profile/profileStatus/profileStatusContainer';
import NewPostContainer from '../posts/newPost/newPostContainer';
import ProfileStatusHook from '../profile/profileStatus/profileStatusHook';

const ProfileUser = (props) => {
  if(!props.profileUsers){
    return <Loader/>
  }
return <div className={s.container}>
      <div className={s.avatar}>
        <img src={props.profileUsers.photos.large? props.profileUsers.photos.large :  defaultAvatar} alt="" />
      </div>
      <div className={s.info}>
        <div className={s.name}>
          {props.profileUsers.fullName}
        </div>
        <div className={s.status}>
        <ProfileStatusHook/>
        </div>
      <div className={s.job}>
        <div className={s.job_looking}>
          {props.profileUsers ?
          <div className={s.job_text}>
            Позовите меня на собеседование!!
          </div> : 
          <div className={s.job_text}>
            Я уже работаю
          </div> }
        </div>
        <div className={s.job_looking}>
          <div className={s.job_text}>{props.profileUsers.lookingForAJobDescription}</div>
        </div>
      </div>
      <div className={s.social}>
        <div className={s.social_link}>
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.facebook ? props.profileUsers.contacts.facebook: "vk.com"}><img src={vk} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink  className={s.social_link_nav} to={props.profileUsers.contacts.vk? props.profileUsers.contacts.vk: "vk.com"}><img src={facebook} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.twitter? props.profileUsers.contacts.twitter: "vk.com"}><img src={twitter} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.instagram? props.profileUsers.contacts.instagram: "vk.com"}><img src={instagram} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.github? props.profileUsers.contacts.github: "vk.com"}><img src={github} alt=""/></NavLink>
        </div>
      </div>
    </div>
    {props.userId=== +props.match.params.userId
    ? <>
        <NewPostContainer/>
        <PostContainer/>
      </>
    : '' }    
      </div>
}
export default ProfileUser;