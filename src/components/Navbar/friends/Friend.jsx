import React from 'react';
import styles from './Friend.module.css';

// History API html5
// Prevent default
const Friend = (props) =>{
    return (
                <div className={styles.friend}>
                <img src={props.URLimg} alt='Friend pic'></img>
                    <p>{props.friendName}</p>
                </div>
    )
}

export default Friend;