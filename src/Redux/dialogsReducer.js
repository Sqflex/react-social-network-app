const AddMessage = "ADD-MESSAGE"
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) =>{
    if (action.type === AddMessage) {
        let newMessage = { id: 5, message: state.newMessageText };
        state.messages.push(newMessage);
        state.newMessageText = '';
    }
    else if (action.type === updateNewMessageText) {
       state.newMessageText = action.newMessageText;
    }

    return state;
}

export default dialogsReducer;