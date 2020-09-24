import { act } from "react-dom/test-utils";

const AddMessage = "ADD-MESSAGE"
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case AddMessage:
            let newMessage = { id: 5, message: state.newMessageText };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case updateNewMessageText:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreater = () => {
    return {
        type: AddMessage
    }
}

export const updateNewMessageTextActionCreater = (Mestext) => {
    return { type: updateNewMessageText, newMessageText: Mestext }
}

export default dialogsReducer;