import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import { render } from '@testing-library/react';

class UsersC extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (p) =>{
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div className="Users-wrapper">
                <div className="pagination">
                   {pages.map( p => {
                       return <span className={this.props.currentPage === p && s.selectedPage } onClick={(e) =>{this.onPageChanged(p)}}>{p} </span>
                   })} 
                </div>
                <h2>Users</h2>
                <div className="Users-list">
                    {
                        this.props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt="UserPhoto" />
                                </div>
                                <div>
                                    {u.followed ?
                                        <button onClick={() => { this.props.unfollow(u.id) }} >unFollow</button> :
                                        <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

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
}

export default UsersC