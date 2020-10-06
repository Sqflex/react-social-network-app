import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/news" component={News} />
          <Route path="/dialogs" 
          render={ () => <DialogsContainer />} />
          <Route path="/profile" 
          render={ () => <Profile/>} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
