import React from 'react';

const Navbar = () =>{
    return (
        <aside className="navigation">
            <nav>
            <ul>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
            </ul>
            <div>
                <p>Settings</p>
            </div>
            </nav>
        </aside>
    )
}

export default Navbar;