import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className="profile-background">
                <img src="https://sun9-15.userapi.com/0isHeMubDs_eDAB28yFIjEEcjT9t_E1Hr8whtQ/Z3TH8GDs2QM.jpg" alt="background-profile"></img>
            </div>
            <div className={s.describtionBlock}>
                Avatar + Describtion
        </div>
        </div>
    )
}

export default ProfileInfo;