import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <section className>
        <ProfileInfo />
        <MyPosts posts={props.posts}/>
      </section>
    )
}

export default Profile;


