import React from 'react';
import styles from './Friend.module.css';
import { NavLink } from 'react-router-dom';
// History API html5
// Prevent default
const Friend = (props) =>{
    return (
            
            <div className={styles.friends}>
                <div className={styles.friend}>
                    <img src="https://sun2.beltelecom-by-minsk.userapi.com/impg/S7ilepgCBL1lZlJ30X9C9qfWY4yOaNVkoqRrSw/g5BJIlyzCf4.jpg?size=100x0&quality=88&crop=0,112,519,519&sign=195b15e558f18e44770d02c281f9f1e1&ava=1"></img>
                    <p>Misha</p>
                </div>
                <div className={styles.friend}>
                    <img src="https://sun2.beltelecom-by-minsk.userapi.com/impg/S7ilepgCBL1lZlJ30X9C9qfWY4yOaNVkoqRrSw/g5BJIlyzCf4.jpg?size=100x0&quality=88&crop=0,112,519,519&sign=195b15e558f18e44770d02c281f9f1e1&ava=1"></img>
                    <p>Misha</p>
                </div>
                <div className={styles.friend}>
                    <img src="https://sun2.beltelecom-by-minsk.userapi.com/impg/S7ilepgCBL1lZlJ30X9C9qfWY4yOaNVkoqRrSw/g5BJIlyzCf4.jpg?size=100x0&quality=88&crop=0,112,519,519&sign=195b15e558f18e44770d02c281f9f1e1&ava=1"></img>
                    <p>Misha</p>
                </div>
            </div>
    )
}

export default Friend;