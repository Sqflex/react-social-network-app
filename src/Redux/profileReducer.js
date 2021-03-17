import { profileAPI, usersAPI } from '../API/api.js';

const addPost = 'ADD-POST'
const updateNewPostText = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_USER_STATUS'

let initialState = {
    postsData: [
        { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
        { id: 2, postmessage: 'My first post ;3', likes: '5' },
    ],
    newPostText: 'Samuraijs',
    profile: null,
    status: "Hello!",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                postmessage: state.newPostText,
                likes: 0

            };
            let stateCopy = { ...state }
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case updateNewPostText: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS:{
            return{...state, status: action.status}
        }
        default:
            return state;
    }
}

export const setStatus = (status) =>{
    return{
        type: SET_STATUS, status
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

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export const getProfile = (userId) => (dispatch) =>{
    usersAPI.getProfileInformation(userId).then(response =>{
        dispatch(setUserProfile(response.data))
    });
}

export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId).then(response =>{
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(response =>{
        if(response.data.resultCode===0){
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;