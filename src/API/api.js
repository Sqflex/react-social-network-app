import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "aec40192-d664-4cd3-a5e0-f6adddacbe26"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => response.data
        );
    },

    getProfileInformation(userId) {
        console.log('Obsolete method. Please use profileAPI');
        return profileAPI.getProfileInformation(userId);
    }
}

export const profileAPI = {
    getProfileInformation(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`/profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`/profile/status/`, {status: status});
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
    },
    authLogin(email, password,rememberMe) {
        return instance.post(`/auth/login`, {email,password,rememberMe}).then(
            response => response.data
        )
    }
}


