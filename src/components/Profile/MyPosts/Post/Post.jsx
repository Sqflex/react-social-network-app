import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
          <div className={s.posts__item}>
            <img src="https://sun9-30.userapi.com/c639724/v639724018/5406b/mqjbhHdkiN8.jpg" alt="post"></img>
            {props.message}
            <div>
            {props.likesnumber}
            <span> Like</span>
            </div>
            
          </div>
    )
}

export default Post;


