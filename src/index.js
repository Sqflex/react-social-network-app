import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'

//addPost('SamuraiJS');

    ReactDOM.render(
        <React.StrictMode>
            <Provider store = {store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

// bind (to learn)