import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
    return (
    <div className={style.dialog + ' ' + style.activeDialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

const Message = (props) =>{
    return(
    <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
            <div className={style.dialogs_logo}>
                <h2>Dialogs</h2>
            </div>
                <DialogItem name="Vlad" id="1" />
                <DialogItem name="Vadim" id="2" />
                <DialogItem name="Evgen" id="3" />
                <DialogItem name="Valentin" id="4" />
            </div>
            <div className={style.messages}>
               <Message message="hi" />
               <Message message="How are u?" />
               <Message message="Hey, im fine, u?" /> 
            </div>
        </section>

    )
}

export default Dialogs;