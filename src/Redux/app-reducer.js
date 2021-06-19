import {Authorization} from '../API/api';
import {AuthorizationMeThunk} from "./authReducer.js"
import {stopSubmit} from "redux-form";

const SET_INITIALIZED =  'SET_INITIALIZED'

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        /*case TOGGLE_IS_FETCHING:{
            return { ...state, isFetching: action.isFetching}
        } */
        default:
            return state;
    }
}
export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) =>{
    let dispatchResult = dispatch(AuthorizationMeThunk());
    Promise.all([dispatchResult]).then(() =>{
        dispatch(initializedSuccess());
    });
}

// export const LoginThunk = (email,password,rememberMe) => (dispatch) =>{
//     Authorization.login(email,password,rememberMe).then(data => {
//         if(data.resultCode === 0){
//             dispatch(AuthorizationMeThunk());
//         }
//         else{
//             let message = data.messages.length > 0 ? data.messages[0] : "Unknown mistake";
//             dispatch(stopSubmit("login", {_error: message}));
//         }
//     });
// }

// export const LogoutThunk = () => (dispatch) =>{
//     Authorization.logout().then(data => {
//         if(data.resultCode === 0){
//             dispatch(setAuthUserData(null, null, null,false));
//         }
//     });
// }

export default appReducer;
//DDD - to learn