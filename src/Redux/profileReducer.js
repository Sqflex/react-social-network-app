const addPost = 'ADD-POST'
const updateNewPostText = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
        { id: 2, postmessage: 'My first post ;3', likes: '5' }, 
    ],
    newPostText: 'Samuraijs'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                postmessage: state.newPostText,
                likes: 0

            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case updateNewPostText:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater = () => {
    return {
        type: addPost
    }
}

export const updateNewPostTextActionCreater = (text) => {
    return { type: updateNewPostText, newText: text }
}

export default profileReducer;