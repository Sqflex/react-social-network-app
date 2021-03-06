import {Authorization} from '../API/api';
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA =  'SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        /*case TOGGLE_IS_FETCHING:{
            return { ...state, isFetching: action.isFetching}
        } */
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {
    userId,
    email,
    login,
    isAuth
}})

export const AuthorizationMeThunk = () => (dispatch) =>{
    Authorization.me().then(data => {
        if(data.resultCode === 0){
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const LoginThunk = (email,password,rememberMe) => (dispatch) =>{
    Authorization.login(email,password,rememberMe).then(data => {
        if(data.resultCode === 0){
            dispatch(AuthorizationMeThunk());
        }
        else{
            let message = data.messages.length > 0 ? data.messages[0] : "Unknown mistake";
            dispatch(stopSubmit("login", {_error: message}));
        }
    });
}

export const LogoutThunk = () => (dispatch) =>{
    Authorization.logout().then(data => {
        if(data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null,false));
        }
    });
}

export default authReducer;
//DDD - to learn