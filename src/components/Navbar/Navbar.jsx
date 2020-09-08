import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () =>{
    return (
        <aside className={styles.navigation}>
            <nav>
            <ul className={styles.nav}>
                <li classname="nav__item"><a href="/profile" classname={styles.nav__item}>Profile</a></li>
                <li classname="nav__item"><a href="/dialogs">Messages</a></li>
                <li classname="nav__item"><a href="/news">News</a></li>
                <li classname="nav__item"><a href="/music">Music</a></li>
                <li classname="nav__item"><a href="/settings">Settings</a></li>
            </ul>
            </nav>
        </aside>
    )
}

export default Navbar;