import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
// History API html5
// Prevent default
const Navbar = () =>{
    return (
        <aside className={styles.navigation}>
            <nav>
            <ul className={styles.nav}>
                <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
            </ul>
            </nav>
        </aside>
    )
}

export default Navbar;