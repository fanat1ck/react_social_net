import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

let reducerAuth = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }

};


export let setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export let getAuthData = () => (dispatch) => {
    authAPI.getMe().then((response) => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            return dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default reducerAuth;
