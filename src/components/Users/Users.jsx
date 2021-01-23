import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';

const Users = (props) => {

    let getUsers = () =>{
    if(props.users.length === 0){

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            props.setUsers(response.data.items);
        });

        
    }
    }
    return (
        <div className="Users-wrapper">
            <button onClick={getUsers}>Get Users</button>
            <h2>Users</h2>
            <div className="Users-list">
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt="UserPhoto"/>
                            </div>
                            <div>
                                {u.followed ? 
                                <button onClick={() => {props.unfollow(u.id) } } >unFollow</button> :
                                 <button onClick={() => {props.follow(u.id) } }>Follow</button>}
                                
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

export default Users