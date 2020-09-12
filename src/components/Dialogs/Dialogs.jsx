import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.activeDialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Vadim' },
        { id: 3, name: 'Evgen' },
        { id: 4, name: 'Valentin' }
    ]

    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, name: 'How is it going?' },
        { id: 3, name: 'Fine, ty' },
        { id: 4, name: 'Wanna go outside tonight?' }
    ]


    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                <div className={style.dialogs_logo}>
                    <h2>Dialogs</h2>
                </div>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </section>

    )
}

export default Dialogs;