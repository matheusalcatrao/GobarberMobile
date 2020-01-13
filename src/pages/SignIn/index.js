import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';
// import { Container } from './styles';

export default function SignIn() {
    return (
        <Background>
            <Text>SingnIn</Text>
            <Input
                style={{ marginTop: 30 }}
                icon="call"
                placeholder="Digite teu CU"
            />
            <Button>Entrar</Button>
        </Background>
    );
}
