import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuthRedirect from '../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (Mestext) => {
            let action = updateNewMessageTextActionCreater(Mestext)
            dispatch(action);
        },
        addMessage: () => { dispatch(addMessageActionCreater()); }
    }
}



let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;