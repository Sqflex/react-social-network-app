import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className="my-posts">
          <h3>My Posts</h3>
          <textarea></textarea>
          <button>Add Post</button>
          <button>Remove Post</button>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    )
}

export default MyPosts;


