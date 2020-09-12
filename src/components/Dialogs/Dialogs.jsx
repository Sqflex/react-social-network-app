import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( 
        dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messages.map ( 
        message => <Message message={message.message} />)
    
    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                <div className={style.dialogs_logo}>
                    <h2>Dialogs</h2>
                </div>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }

            </div>
        </section>

    )
}

export default Dialogs;