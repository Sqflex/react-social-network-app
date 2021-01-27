import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/img/user.png';
import s from './Users.module.css';
import axios from 'axios';
import { followAPI } from '../../API/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="Users-wrapper">
            <div className="pagination">
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
                })}
            </div>
            <h2>Users</h2>
            <div className="Users-list">
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt="UserPhoto" />
                                </NavLink>

                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        followAPI.userUnFollow.then(data => {
                                            if(data.resultCode === 0){
                                                props.unfollow(u.id)
                                                console.log("Unfollowed")
                                            }
                                        });
                                    }} >unFollow</button> :
                                    <button onClick={() => {
                                        followAPI.userFollow(u.id).then(data => {
                                            if(data.resultCode === 0){
                                                props.follow(u.id)
                                                console.log("followed")
                                            }
                                        });
                                    }}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>

                    </div>)
                }
            </div>
        </div>
    )
}

export default Users;