import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from '../../../Validators/validators.js';
import {Textarea} from '../../../common/FormsControls/FormsControls.js'

const maxLength = maxLengthCreator(50);

const AddPostForm = props =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field name="newPostText" placeholder="Enter your post text here:" component={Textarea} validate={[required, maxLength]}/></div>
        <div>
          <button type="submit">Add Post</button>
        </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm);

export default AddPostFormRedux;