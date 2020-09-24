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

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar /*friends={props.state.friendsSection.friends} *//>
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/news" component={News} />
          <Route path="/dialogs" render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} newMessageText={props.state.messagesPage.newMessageText} dispatch={props.dispatch}/>} />
          <Route path="/profile" render={ () => <Profile posts={props.state.profile.postsData} dispatch={props.dispatch} newPostText={props.state.profile.newPostText}/>} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
