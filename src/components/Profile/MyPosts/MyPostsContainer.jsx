import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer> 
      {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreater());
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreater(text)
          store.dispatch(action);
        }

        return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={store.getState().profile.postsData} newPostText={store.getState().profile.newPostText} />
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;


