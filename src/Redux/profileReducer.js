const addPost = 'ADD-POST'
const updateNewPostText = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
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