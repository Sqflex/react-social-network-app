import React from 'react';
import {Field, reduxForm} from "redux-form";

const AddPostForm = props =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field name="newPostText" placeholder="Enter your post text here:" component="input"/></div>
        <div>
          <button type="submit">Add Post</button>
        </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm);

export default AddPostFormRedux;