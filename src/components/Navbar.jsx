import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () =>{
    return (
        <aside className={styles.navigation}>
            <nav>
            <ul className={styles.nav}>
                <li ><a href="##" classname={styles.nav__item}>Profile</a></li>
                <li classname="nav__item"><a href="##">Messages</a></li>
                <li classname="nav__item"><a href="##">News</a></li>
                <li classname="nav__item"><a href="##">Music</a></li>
                <li classname="nav__item"><a href="##">Settings</a></li>
            </ul>
            </nav>
        </aside>
    )
}

export default Navbar;