import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
    (Dialogs);