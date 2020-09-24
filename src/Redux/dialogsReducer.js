const AddMessage = "ADD-MESSAGE"
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Vadim' },
        { id: 3, name: 'Evgen' },
        { id: 4, name: 'Valentin' }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How is it going?' },
        { id: 3, message: 'Fine, ty' },
        { id: 4, message: 'Wanna go outside tonight?' }
    ],
    newMessageText: 'Type here!'
};

const dialogsReducer = (state = initialState, action) => {
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