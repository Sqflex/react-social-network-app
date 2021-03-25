import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { Redirect } from 'react-router-dom';
import MessageInput from './DialogForm/DialogForm';

const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    if(props.isAuth===false) return <Redirect to={"/login"} />

    let dialogsElements = props.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messages.map(
        message => <Message message={message.message} />)

    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                <div className={style.dialogs_logo}>
                    <h2>Dialogs</h2>
                </div>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <MessageInput onSubmit={addNewMessage}/>
            </div>
        </section>

    )
}

export default Dialogs;