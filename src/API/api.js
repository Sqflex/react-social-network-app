import * as axios from 'axios';
import { getProfile } from '../Redux/profileReducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "aec40192-d664-4cd3-a5e0-f6adddacbe26"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => response.data
        );
    },
    getProfileInfo(userId) {
        return instance.get(`profile/` + userId);
    }
}

export const followAPI = {
    userFollow(id = 1) {
        return instance.post(`follow/${id}`, {}).then(
            response => response.data
        )
    },
    userUnFollow(id = 1) {
        return instance.delete(`follow/${id}`).then(
            response => response.data
        )
    }
}

export const Authorization = {
    me(){
        return instance.get('auth/me').then(
            response => response.data
        )
    }
}

export const getProfile = (id = 1) =>{
    return instance.get(`profile/${id}`).then(
        response => response.data
    )
}
