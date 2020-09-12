import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
  { id: 2, postmessage: 'My first post ;3', likes: '5' },
]

let dialogs = [
  { id: 1, name: 'Vlad' },
  { id: 2, name: 'Vadim' },
  { id: 3, name: 'Evgen' },
  { id: 4, name: 'Valentin' }
]

let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'How is it going?' },
  { id: 3, message: 'Fine, ty' },
  { id: 4, message: 'Wanna go outside tonight?' }
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
