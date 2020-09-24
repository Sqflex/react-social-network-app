const addPost = 'ADD-POST'
const updateNewPostText = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    
    if (action.type === addPost) {
        let newPost = {
            id: 5,
            postmessage: state.newPostText,
            likes: 0

        };

        state.postsData.push(newPost);
        state.newPostText = '';
    } else if (action.type === updateNewPostText) {
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;