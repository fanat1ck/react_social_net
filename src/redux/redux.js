import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducerUsers from '../reducer/reducerUsers';
import reducerProfile from '../reducer/reducerProfile';
import reducerMessage from '../reducer/reducerMessage';
import reducerAuth from '../reducer/reducerAuth';
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    profilePage: reducerProfile,
    userPage: reducerUsers,
    messagePage: reducerMessage,
    auth: reducerAuth,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
