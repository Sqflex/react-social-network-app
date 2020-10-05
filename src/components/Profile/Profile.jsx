import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <section className>
        <ProfileInfo />
        <MyPostsContainer store={props.store}/>
      </section>
    )
}

export default Profile;


