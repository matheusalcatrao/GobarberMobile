import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import App from './App.js';

import { store, presistor } from './store';

export default function Index() {
    return (
        <Provider store={store}>
            <PersistGate persistor={presistor}>
                <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
                <App />
            </PersistGate>
        </Provider>
    );
}
