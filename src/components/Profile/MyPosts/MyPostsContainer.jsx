import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreater, addPostActionCreater} from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost =()=>{
    props.store.dispatch(addPostActionCreater());
  }

  let onPostChange = (text) =>{
    let action = updateNewPostTextActionCreater(text)
    props.store.dispatch(action);
  }

  return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profile.postsData} newPostText={state.profile.newPostText}/>)
}

export default MyPostsContainer;


