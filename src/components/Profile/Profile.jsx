import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <section className={s.content}>
        <div className="profile-background">
          <img src="https://sun9-15.userapi.com/0isHeMubDs_eDAB28yFIjEEcjT9t_E1Hr8whtQ/Z3TH8GDs2QM.jpg"></img>
        </div>
        <div className="avatar-describtion">
          Avatar + Describtion
        </div>
        <div className="add-post">
          <div className="post">
              Add Post
          </div>
        </div>
        <MyPosts />
      </section>
    )
}

export default Profile;


