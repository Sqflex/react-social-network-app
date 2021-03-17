import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div className="profile-background">
                <img src="https://sun9-15.userapi.com/0isHeMubDs_eDAB28yFIjEEcjT9t_E1Hr8whtQ/Z3TH8GDs2QM.jpg" alt="background-profile"></img>
            </div>
            <div className={s.describtionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={'Hello, Im in charge now!'}/>
                <div className="info-container">
                    <ul>
                        <li>О себе: {props.profile.aboutMe}</li>
                        <li>Ищу ли работу: {props.profile.lookingForAJob}</li>
                        <li>Полное имя: {props.profile.fullName}</li>
                    </ul>
                    
                </div>
        </div>
        </div>
    )
}

export default ProfileInfo;