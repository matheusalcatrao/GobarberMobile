import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFalure } from './actions';

export function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            Alert.alert(
                'Erro no login',
                'Usuário não pode ser prestador de serviço'
            );
            return;
        }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        // history.push('/dashboard');
    } catch (err) {
        Alert.alert('Erro no login', 'Usuário ou senha estão incorretos');
        yield put(signFalure());
    }
}

export function* signUp({ payload }) {
    try {
        const { email, name, password } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
        });

        Alert.alert('Parabéns!', 'Cadastrado com sucesso');
        // history.push('/');
    } catch (err) {
        Alert.alert('Falha no cadastro', 'verifique seus dados!');
        yield put(signFalure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
