import React from 'react';
import { Field, reduxForm } from "redux-form";
import {required, maxLengthCreator} from '../../Validators/validators.js';
import {Textarea} from '../../common/FormsControls/FormsControls.js'

const maxLength = maxLengthCreator(50);

const AddMessageForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className='add-message'>
                <div><Field name="newMessageBody" placeholder="Add your message here:" component={Textarea} validate={[required, maxLength]}/></div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'AddMessageForm' })(AddMessageForm);

export default AddMessageFormRedux;