import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer"
import userReducer from './usersReducer'

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: dialogsReducer,
    friendsSection: friendsReducer,
    usersPage: userReducer
});

let store = createStore(reducers);

window.store = store;

export default store;