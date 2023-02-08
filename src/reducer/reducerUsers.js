import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS ';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE ';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT ';
const SET_FETCHING = 'SET_FETCHING ';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS ';

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 115,
    currentPage: 1,
    isFetching: false,
    toggleProgress: [],
};

const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: [...action.usersData],
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                toggleProgress: action.toggleProgress
                    ? [...state.toggleProgress, action.userId]
                    : state.toggleProgress.filter((id) => id = !action.userId),
            };
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usersData) => ({type: SET_USERS, usersData});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
export const toggleFollowingProgress = (toggleProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    toggleProgress,
    userId,
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(setFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount / 200));

        });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));

            });
    }
};


export default reducerUsers;
