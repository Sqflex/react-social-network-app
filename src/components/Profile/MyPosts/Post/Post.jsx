import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
          <div className={s.posts__item}>
            <img src="https://sun9-30.userapi.com/c639724/v639724018/5406b/mqjbhHdkiN8.jpg"></img>
            Post 1
            <div>
            <span>Like</span>
            </div>
            
          </div>
    )
}

export default Post;


