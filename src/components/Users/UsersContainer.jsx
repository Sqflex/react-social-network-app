import React from 'react';
import { connect } from 'react-redux';
import { unfollow, follow, setCurrentPage, toggleFollowingProgress, getUsers} from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';
import withAuthRedirect from '../../hoc/WithAuthRedirect'

class UsersContainer extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /* this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        }); */
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize);
        /*this.props.toggleIsFetching(true);
        usersAPI.getUsers(p, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        }); */
    }

    render() {
        return <>
            <div>{this.props.isFetching ? <Preloader /> : null}</div>
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let withUserComponentRedirect = withAuthRedirect(UsersContainer);

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) =>{
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
} */


export default connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage, toggleFollowingProgress, getUsers
})(withUserComponentRedirect);