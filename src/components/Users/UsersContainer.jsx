import React from 'react';
import { connect } from 'react-redux';
import { unfollowAC, followAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../Redux/usersReducer';
import Users from './Users';
import axios from 'axios';

class UsersContainer extends React.Component {

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
        return ( <Users totalUsersCount={this.props.totalUsersCount} pageSize = {this.props.pageSize} currentPage = {this.props.currentPage} onPageChanged={this.onPageChanged}
        users =  {this.props.users}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        />)

    }
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userid) =>{
            dispatch(followAC(userid))
        },
        unfollow: (userid) =>{
            dispatch(unfollowAC(userid))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)