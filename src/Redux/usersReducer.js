const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS'


let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    }
                    return u;
                })

            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u;
                })

            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return { ...state, isFetching: action.isFetching}
        }
        case FOLLOW_IN_PROGRESS:{
            return { ...state, 
                followingInProgress: action.isFetching ? [state.followingInProgress,action.userId] : state.followingInProgress.filter(id => id !== action.userId)}
        }
        default:
            return state;
    }
}

export const follow = (userid) => {
    return {
        type: FOLLOW, userid
    }
}

export const unfollow = (userid) => {
    return { type: UNFOLLOW, userid }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCount = (totalCount) =>{
    return {type: SET_TOTAL_USERS_COUNT, count: totalCount}
}
export const toggleIsFetching = (isFetching) =>{
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const toggleFollowingProgress = (isFetching, userId) =>{
    return{type: FOLLOW_IN_PROGRESS, isFetching, userId}
}

export default userReducer;
//DDD - to learn