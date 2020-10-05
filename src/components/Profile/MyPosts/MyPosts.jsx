import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreater, addPostActionCreater} from '../../../Redux/profileReducer'


const MyPosts = (props) => {

  let postsElements = props.posts.map (post => <Post message={post.postmessage} likesnumber={post.likes} />)

  let newPostAdd = React.createRef();

  let onAddPost =()=>{
    props.addPost();
  }

  let onPostChange = () =>{
    let text = newPostAdd.current.value;
    props.updateNewPostText(text);
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
        <div><textarea onChange={onPostChange} ref={newPostAdd} value={props.newPostText}/></div>
        <div>
          <button onClick={ onAddPost }>Add Post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;


