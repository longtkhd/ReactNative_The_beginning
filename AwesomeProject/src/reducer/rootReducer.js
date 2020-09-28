import { LoginReducer } from '../screens/Login/reducer'

import { combineReducers } from 'redux';


export default combineReducers({

    login: loginReducer,


})