import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {

    return (
        <section>
            <div className='mesage'>
                <div className={style.message}>{props.message}</div>
            </div>
        </section>
    )
}

export default Message;