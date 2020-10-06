import React from 'react';
import StoreContext from '../../StoreContext';
import Friend from './friends/Friend';
import Navbar from './Navbar'
// History API html5
// Prevent default
const NavbarContainer = (props) => {
    return <StoreContext.Consumer>
        {
            (store) => {
                return <Navbar friends={store.getState().friendsSection.friends} />
            }

        }
    </StoreContext.Consumer>

}

export default NavbarContainer;