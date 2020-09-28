import { all } from 'redux-saga/effects';
import signInSaga from '../screens/Login/saga'

export default function* rootSaga() {
    yield all([
        signInSaga()

    ]);
}