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
        case AddMessage: {
            let newMessage = { id: 6, message: state.newMessageText};
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy;
        }
        case updateNewMessageText: {
            let stateCopy2 = {...state}
            stateCopy2.newMessageText = {...state.newMessageText}
            stateCopy2.newMessageText = action.newMessageText
            return stateCopy2;
        }
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