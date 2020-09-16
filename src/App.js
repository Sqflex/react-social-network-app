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
import state from './Redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.friendsSection.friends}/>
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/news" component={News} />
          <Route path="/dialogs" render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>} />
          <Route path="/profile" render={ () => <Profile posts={props.state.profile.postsData} addPost={props.addPost} newPostText={props.state.profile.newPostText} updateNewPostText={props.updateNewPostText}/>} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
