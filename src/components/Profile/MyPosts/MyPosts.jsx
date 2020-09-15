import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map (post => <Post message={post.postmessage} likesnumber={post.likes} />)

  let newPostAdd = React.createRef();

  let addPost =()=>{
    let text = newPostAdd.current.value;
    alert(text);
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
        <div><textarea ref={newPostAdd}></textarea></div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;


