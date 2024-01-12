import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../actions/loginActions';

function* handleLogin(action) {
    try {
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, handleLogin);
}

export default loginSaga;
