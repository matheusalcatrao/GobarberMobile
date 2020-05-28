import React from 'react';
import { View } from 'react-native';

import createRoutes from './routes';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function App() {
    const singned = useSelector(state => state.auth.signed);

    const Routes = createRoutes(singned);

    return <Routes />;
}
