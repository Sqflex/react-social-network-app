import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer"
import userReducer from './usersReducer'
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: dialogsReducer,
    friendsSection: friendsReducer,
    usersPage: userReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;