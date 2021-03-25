const AddMessage = "ADD-MESSAGE"

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
        { id: 3, message: 'Fine, thank you' },
        { id: 4, message: 'Wanna go outside tonight?' }
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddMessage: {
            let newMessage = { id: 6, message: action.newMessageBody };
            let stateCopy = { ...state }
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreater = (newMessageBody) => {
    return {
        type: AddMessage, newMessageBody
    }
}

export default dialogsReducer;