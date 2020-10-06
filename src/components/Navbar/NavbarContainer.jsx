import React from 'react';
import { connect } from 'react-redux';
import Friend from './friends/Friend';
import Navbar from './Navbar'
// History API html5
// Prevent default

let mapStateToProps = (state) => {
    return {
        friends: state.friendsSection.friends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;