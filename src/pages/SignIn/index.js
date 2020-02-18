import React, { useRef, useState } from 'react';
import { Image, Animated } from 'react-native';
import { useDispatch } from 'react-redux';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SiginLink,
    SiginLinkText,
} from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(signInRequest(email, password));
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <SubmitButton>Acessar</SubmitButton>
                </Form>

                <SiginLink onPress={() => navigation.navigate('SignUp')}>
                    <SiginLinkText>Criar sua conta</SiginLinkText>
                </SiginLink>
            </Container>
        </Background>
    );
}
