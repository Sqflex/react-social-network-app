import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
            <div className={style.dialogs_logo}>
                <h2>Dialogs</h2>
            </div>
                <div className={style.dialog + ' ' + style.activeDialog}>Vlad</div>
                <div className={style.dialog}>Vadim</div>
                <div className={style.dialog}>Evgen</div>
                <div className={style.dialog}>Valentin</div>
            </div>
            <div className={style.messages}>
               <div className={style.message}>Hi</div>
               <div className={style.message}>How are u?</div>
               <div className={style.message}>Fine, thx. u?</div> 
            </div>
        </section>

    )
}

export default Dialogs;