import * as types from './constant'
export const loginRequest = (username, password) => {
    return {
        type: types.LOGIN,
        data: {
            username,
            password,
        },
    };
}
export const loginSucceed = (data) => {
    return {
        type: types.LOGIN_SUCCESSED,
        data,
    };
}

export const loginFaild = (data) => {
    return {
        type: types.LOGIN_FAILED,
        data,
    };
}