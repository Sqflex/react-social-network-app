import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
  return{
    posts: state.profile.postsData,
    newPostText: state.profile.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
      updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreater(text)
        dispatch(action);
      },
      addPost: () => {dispatch(addPostActionCreater());}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


