import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//addPost('SamuraiJS');

export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
    <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
);}

rerenderEntireTree(store.getState());
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree();
});

// bind (to learn)