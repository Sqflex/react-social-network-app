import { addMessageActionCreater} from '../../Redux/dialogsReducer'
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
        addMessage: (newMessageBody) => { dispatch(addMessageActionCreater(newMessageBody)); }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
    (Dialogs);