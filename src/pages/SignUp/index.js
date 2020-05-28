import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { signUpRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SiginLink,
    SiginLinkText,
} from './styles';

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading);

    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        icon="person-outline"
                        keyboardType="email-address"
                        placeholder="Nome Completo"
                        value={name}
                        onChangeText={setName}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <SubmitButton loading={loading} onPress={handleSubmit}>
                        Criar conta
                    </SubmitButton>
                </Form>

                <SiginLink onPress={() => navigation.navigate('SignIn')}>
                    <SiginLinkText>Ja tenho conta</SiginLinkText>
                </SiginLink>
            </Container>
        </Background>
    );
}
