import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageText: (Mestext) => {
            let action = updateNewMessageTextActionCreater(Mestext)
            dispatch(action);
        },
        addMessage: () => {dispatch(addMessageActionCreater());}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;