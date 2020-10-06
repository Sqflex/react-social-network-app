import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().messagesPage;

            let onAddMessage = () => {
                //props.addPost();
                store.dispatch(addMessageActionCreater());
            }

            let onMessageChange = (Mestext) => {
                let action = updateNewMessageTextActionCreater(Mestext)
                store.dispatch(action);
            }
            return <Dialogs updateNewMessageText={onMessageChange} addMessage={onAddMessage} dialogs={state.dialogs} messages={state.messages} />
        }

    }
    </StoreContext.Consumer>

}

export default DialogsContainer;