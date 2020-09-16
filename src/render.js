import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './Redux/state';

//addPost('SamuraiJS');

export let rerenderEntireTree = (state) =>{ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
);}