import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    postData: [
        {id: 1, message: "Hello word", like: "1"},
        {id: 2, message: "World hello", like: "2"},
        {id: 3, message: "!!!", like: "3"},
        {id: 4, message: "Hello", like: "4"},
    ],
    newText: "fanat1ck",
    profile: null,
    status: ''

};

const reducerProfile = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_POST: {
            return {
                ...state,
                newText: action.newPostText,
            }
        }
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, {id: 10, message: state.newText, like: 0}],
                newText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;

    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then((response) => dispatch(setUserProfile(response.data)))
}

export default reducerProfile;
