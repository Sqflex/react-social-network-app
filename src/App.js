import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.friendsSection.friends} />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/news" component={News} />
          <Route path="/dialogs" 
          render={ () => <DialogsContainer store={props.store}/>} />
          <Route path="/profile" 
          render={ () => <Profile store={props.store}/>} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
