import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onAddMessage = () => {
        //props.addPost();
        props.store.dispatch(addMessageActionCreater());
    }

    let onMessageChange = (Mestext) => {
        let action = updateNewMessageTextActionCreater(Mestext)
        props.store.dispatch(action);
    }

    return (<Dialogs updateNewMessageText={onMessageChange} addMessage={onAddMessage} dialogs={state.dialogs} messages={state.messages}/>)
}

export default DialogsContainer;