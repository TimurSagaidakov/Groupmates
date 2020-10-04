import React from 'react';
import s from'./profile.module.css'
import Background from '../background/background';
import Info from '../info/info';
const Profile = (props) => {
return <div className={s.container}>
        <Info/>
        <Background/>
</div>
}
export default Profile;