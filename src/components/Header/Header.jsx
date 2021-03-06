import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
    return (
        <header className={s.header}>
        <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"></img>
        <div className={s.login_block}>
          {props.isAuth ? <div>{props.login} <button onClick={props.LogoutThunk}>Log out</button></div>: <NavLink to ={'/login'}><p id="userName"className={s.login_text}>Login</p></NavLink>}
          
        </div>
      </header>
    )
}

export default Header;