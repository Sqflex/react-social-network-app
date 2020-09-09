import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className="add-post">
        <div className="post">
          Add Post
      </div>
      </div>
      <div className={s.postBlock}>
        <h3>My Posts</h3>
        <div><textarea></textarea></div>
        <div>
          <button>Add Post</button>
          <button>Remove Post</button>
        </div>
        <div className={s.posts}>
          <Post message='Hi, im working tonight!' likenumber="32 " />
          <Post message='My first post ;3' likenumber="5 " />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default MyPosts;


