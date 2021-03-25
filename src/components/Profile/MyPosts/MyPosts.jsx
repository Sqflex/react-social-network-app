import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from './PostForm/PostForm';

const MyPosts = (props) => {

  let postsElements = props.posts.map (post => <Post message={post.postmessage} likesnumber={post.likes} />)

  let onAddPost =(values)=>{
    props.addPost(values.newPostText);
  }
  

  return (
    <div>
      <div className="add-post">
        <div className="post">
          Add Post
      </div>
      </div>
      <div className={s.postBlock}>
        <h3>My Posts</h3>
        <AddPostFormRedux onSubmit={onAddPost}/>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;


