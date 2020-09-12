import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
    { id: 2, postmessage: 'My first post ;3', likes: '5' },
]

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
          <Post message={postsData[0].postmessage} likesnumber={postsData[0].likes} />
          <Post message={postsData[1].postmessage} likesnumber={postsData[1].likes} />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default MyPosts;


