import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <section className>
        <ProfileInfo />
        <MyPosts />
      </section>
    )
}

export default Profile;


