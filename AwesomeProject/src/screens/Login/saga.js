import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { BASE_URL } from '../../urlConfig'
import { loginSucceed, loginFaild } from './action';
import * as types from './constant';

export function* loginSaga(action) {
    try {
        const data = yield call(axios.request, {
            url: LOGIN_API,
            method: 'POST',
            data: {
                email: action.data.username,
                password: action.data.password,
            }
        })

        if (data) {
            localStorage.setItem('token', data.data.token);
            yield put(loginSucceed(data.data.token));


        }
    } catch (error) {
        yield put(loginFaild(error))
    }
}

export default function* signInSaga() {
    yield takeLatest(types.LOGIN, loginSaga);
}
