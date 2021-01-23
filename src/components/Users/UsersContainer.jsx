import React from 'react';
import { connect } from 'react-redux';
import { unfollowAC, followAC, setUsersAC } from '../../Redux/usersReducer';
import Users from './Users';
import UsersC from './UsersC';

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)