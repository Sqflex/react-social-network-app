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
    } 
}

export const followAPI = {
    userFollow(id = 1){ 
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

export const Authorization = () =>{
    return instance.get('auth/me').then(
        response => response.data
    )
}
