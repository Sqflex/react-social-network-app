import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './friends/Friend';
// History API html5
// Prevent default
const Navbar = (props) => {
    let friendsElement = props.friends.map(friend => <Friend friendName={friend.friendName} URLimg={friend.URLimg} />)
    return (
        <aside className={styles.navigation}>
            <nav>
                <ul className={styles.nav}>
                    <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
                    <li><NavLink to="/users" activeClassName={styles.active}>Users</NavLink></li>
                </ul>
            </nav>
            <div className={styles.friends}>
                {friendsElement}
            </div>
        </aside>
    )
}

export default Navbar;