import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../loader/loader';
import s from'./profileUser.module.css';
import twitter from './../../assets/img/twitter.svg';
import github from './../../assets/img/github.svg';
import instagram from './../../assets/img/instagram.svg';
import vk from './../../assets/img/vk.svg';
import facebook from './../../assets/img/facebook.svg';


const ProfileUser = (props) => {
  if(!props.profileUsers){
    return <Loader/>
  }
return <div className={s.container}>
      <div className={s.avatar}>
        <img src={props.profileUsers.photos.large} alt="" />
      </div>
      <div className={s.info}>
        <div className={s.name}>
          {props.profileUsers.fullName}
        </div>
        <div className={s.status}>
          {props.profileUsers.aboutMe}
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
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.facebook}><img src={vk} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink  className={s.social_link_nav} to={props.profileUsers.contacts.vk}><img src={facebook} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.twitter}><img src={twitter} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.instagram}><img src={instagram} alt=""/></NavLink>
        </div>
        <div className={s.social_link}>
          <NavLink className={s.social_link_nav} to={props.profileUsers.contacts.github}><img src={github} alt=""/></NavLink>
        </div>
      </div>
    </div>
      </div>
}
export default ProfileUser;