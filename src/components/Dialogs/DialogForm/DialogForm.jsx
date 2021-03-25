import React from 'react';
import { Field, reduxForm } from "redux-form";

const AddMessageForm = props =>{
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
                <div className='add-message'>
                    <div><Field name="newMessageBody" placeholder="Add your message here:" component="input"/></div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm);

export default AddMessageFormRedux;