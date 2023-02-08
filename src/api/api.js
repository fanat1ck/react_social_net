import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a268d76a-9c5c-45ca-a180-eb5e48b2fe59',
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(u) {
        return instance.delete(`follow/${u}`).then(response => response.data)
    },
    follow(u) {
        return instance.post(`follow/${u}`).then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
}

