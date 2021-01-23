import React from 'react';
import { connect } from 'react-redux';
import { unfollowAC, followAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../Redux/usersReducer';
import Users from './Users';
import UsersC from './UsersC';

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)