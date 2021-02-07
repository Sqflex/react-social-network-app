import React from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import LoginPage from './components/login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderComponent />
        <NavbarContainer />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/news" component={News} />
          <Route path="/dialogs"
            render={() => <DialogsContainer />} />
          <Route path="/profile/:userid?"
            render={() => <ProfileContainer />} />
          <Route path="/Users"
            render={() => <UsersContainer />} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={LoginPage} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
