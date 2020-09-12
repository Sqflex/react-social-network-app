import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Vadim' },
        { id: 3, name: 'Evgen' },
        { id: 4, name: 'Valentin' }
    ]

    let messages = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How is it going?' },
        { id: 3, message: 'Fine, ty' },
        { id: 4, message: 'Wanna go outside tonight?' }
    ]

    let dialogsElements = dialogs.map( 
        dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messages.map ( 
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