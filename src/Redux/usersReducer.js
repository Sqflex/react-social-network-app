const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [ ]
};

const profileReducer = (state = initialState, action) => {
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
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;
    }
}

export const followAC = (userid) => {
    return {
        type: FOLLOW, userid
    }
}

export const unfollowAC = (userid) => {
    return { type: UNFOLLOW, userid }
}

export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

export default profileReducer;
//DDD - to learn